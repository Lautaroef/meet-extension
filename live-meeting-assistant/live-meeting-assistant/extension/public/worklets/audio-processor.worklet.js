// Remove lib references, rely on project tsconfig and installed types
class AudioProcessor extends AudioWorkletProcessor {
    constructor() {
        super();
        this.samplesProcessed = 0;
        console.log('AudioProcessor: Constructor called.');
    }
    process(inputs, outputs, parameters) {
        const inputChannelData = inputs[0]?.[0]; // Assuming mono input for now, or first channel of stereo
        if (!inputChannelData || inputChannelData.length === 0) {
            // console.log('AudioProcessor: No input data or empty channel.');
            return true; // Keep processor alive
        }
        this.samplesProcessed += inputChannelData.length;
        // Log a snippet of input data periodically to avoid flooding the console
        if (this.samplesProcessed % (128 * 50) < inputChannelData.length) { // Log roughly every 50 blocks of 128 samples
            let inputSamplePreview = 'Input Samples: ';
            for (let i = 0; i < Math.min(inputChannelData.length, 5); i++) {
                inputSamplePreview += inputChannelData[i].toFixed(3) + ' ';
            }
            console.log('AudioProcessor: Processing audio data.', {
                inputLength: inputChannelData.length,
                firstInputSample: inputChannelData[0],
                inputSamplePreview
            });
        }
        // TODO: Implement proper downmixing if stereo input (inputs[0] might have multiple channels)
        // For now, we assume inputs[0][0] is the mono channel or the left channel.
        // TODO: Implement proper resampling to 24kHz if currentSampleRate is different.
        // This is a placeholder. `currentSampleRate` is available in AudioWorkletGlobalScope.
        // const targetSampleRate = 24000;
        // if (currentSampleRate !== targetSampleRate) { 
        //   // Resampling logic here - this is complex and needs a library or careful implementation
        //   console.warn(`AudioProcessor: Resampling needed from ${currentSampleRate} to ${targetSampleRate} (not implemented).`);
        // }
        // Convert Float32 samples to PCM16 (Int16Array)
        const pcm16Data = new Int16Array(inputChannelData.length);
        let hasNonZeroPCM = false;
        for (let i = 0; i < inputChannelData.length; i++) {
            const s = Math.max(-1, Math.min(1, inputChannelData[i]));
            pcm16Data[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
            if (pcm16Data[i] !== 0)
                hasNonZeroPCM = true;
        }
        if (this.samplesProcessed % (128 * 50) < inputChannelData.length) { // Also log PCM data snippet
            if (!hasNonZeroPCM) {
                console.warn('AudioProcessor: PCM data appears to be all zeros for this chunk.');
            }
            else {
                let pcmSamplePreview = 'PCM16 Samples: ';
                for (let i = 0; i < Math.min(pcm16Data.length, 5); i++) {
                    pcmSamplePreview += pcm16Data[i] + ' ';
                }
                console.log('AudioProcessor: Converted to PCM16.', { pcmLength: pcm16Data.length, pcmSamplePreview });
            }
        }
        this.port.postMessage(pcm16Data.buffer, [pcm16Data.buffer]);
        return true;
    }
}
registerProcessor('audio-processor', AudioProcessor);
