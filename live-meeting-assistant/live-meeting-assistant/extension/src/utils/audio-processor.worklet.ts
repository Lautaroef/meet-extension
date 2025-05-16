// Remove lib references, rely on project tsconfig and installed types

// Declare global types if not found by default TS lib config
declare var AudioWorkletProcessor: any;
declare function registerProcessor(name: string, processorCtor: any): void;

class AudioProcessor extends AudioWorkletProcessor {
  private samplesProcessed: number = 0;
  constructor() {
    super();
    console.log('AudioProcessor: Constructor called (simplified).');
  }

  process(inputs: Float32Array[][], outputs: Float32Array[][], parameters: Record<string, Float32Array>): boolean {
    // Log raw input immediately
    if (inputs[0] && inputs[0][0] && inputs[0][0].length > 0) {
      let rawInputPreview = 'Raw Input[0][0] Preview: ';
      let hasNonZeroRaw = false;
      for(let i = 0; i < Math.min(inputs[0][0].length, 8); i++) {
        rawInputPreview += inputs[0][0][i].toFixed(4) + ' ';
        if (inputs[0][0][i] !== 0) hasNonZeroRaw = true;
      }
      if (this.samplesProcessed % (128 * 20) < inputs[0][0].length) { // Log less frequently
         console.log('AudioProcessor Worklet: Raw input[0][0] details', {
            length: inputs[0][0].length,
            preview: rawInputPreview,
            hasNonZero: hasNonZeroRaw,
            sampleRate: (this as any).sampleRate // If available, or currentFrame / sampleRate from processor
        });
      }
    } else {
      if (this.samplesProcessed % (128 * 20) < 128) { // Log less frequently if empty
        console.warn('AudioProcessor Worklet: Raw input[0][0] is missing or empty.');
      }
    }

    const inputLeftChannel = inputs[0]?.[0];
    const inputRightChannel = inputs[0]?.[1]; // Get the second channel if it exists

    if (!inputLeftChannel || inputLeftChannel.length === 0) {
      return true; 
    }

    // Determine the number of samples to process (length of the first channel)
    const frameCount = inputLeftChannel.length;
    let monoInputChannelData = inputLeftChannel; // Default to left channel if no right channel

    // Downmix to mono if stereo input is detected (i.e., inputRightChannel exists and has data)
    if (inputRightChannel && inputRightChannel.length === frameCount) {
      console.log('AudioProcessor (simplified): Detected stereo input. Downmixing...');
      monoInputChannelData = new Float32Array(frameCount);
      for (let i = 0; i < frameCount; i++) {
        monoInputChannelData[i] = (inputLeftChannel[i] + inputRightChannel[i]) / 2;
      }
    } else if (inputRightChannel) {
      console.warn('AudioProcessor (simplified): Right channel present but length mismatch or empty. Using left channel only.');
    }

    this.samplesProcessed += frameCount;

    let hasNonZeroInput = false;
    // Clean non-finite values and check for non-zero input from monoInputChannelData
    // for (let i = 0; i < monoInputChannelData.length; i++) {
    //   if (!isFinite(monoInputChannelData[i])) {
    //     // console.warn(`AudioProcessor Worklet: Replacing non-finite value ${monoInputChannelData[i]} at index ${i} with 0.`);
    //     monoInputChannelData[i] = 0.0; // Replace NaN, Infinity, -Infinity with 0
    //   }
    //   if (monoInputChannelData[i] !== 0) {
    //     hasNonZeroInput = true;
    //     // No need to break here if we are cleaning the whole array
    //   }
    // }

    if (this.samplesProcessed % (128 * 10) < frameCount) { 
      if (!hasNonZeroInput) {
        console.warn('AudioProcessor (simplified): Mono input channel data is ALL ZEROS.');
      } else {
        let inputSamplePreview = 'Mono Input Samples (simplified): ';
        for(let i = 0; i < Math.min(monoInputChannelData.length, 8); i++) {
            inputSamplePreview += monoInputChannelData[i].toFixed(4) + ' ';
        }
        console.log('AudioProcessor (simplified): Processing audio data.', { 
            inputLength: monoInputChannelData.length, 
            inputSamplePreview 
        });
      }
    }

    if (outputs[0] && outputs[0][0]) {
      outputs[0][0].set(monoInputChannelData); // Output the mono channel
    }
    
    this.port.postMessage(monoInputChannelData.buffer, [monoInputChannelData.buffer]);

    return true;
  }
}

registerProcessor('audio-processor', AudioProcessor); 