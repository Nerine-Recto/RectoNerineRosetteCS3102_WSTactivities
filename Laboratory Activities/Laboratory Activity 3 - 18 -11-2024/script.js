document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const wordCount = document.getElementById('wordCount');
    const sentenceCount = document.getElementById('sentenceCount');

    const updateCounts = () => {
        // Get and trim the text
        const text = textInput.value.trim();

        // Count words
        const words = text === '' ? [] : text
            .split(/\s+/)
            .filter(word => word.length > 0);
        
        // Count sentences
        const sentences = text === '' ? [] : text
            .split(/[.!?]+\s+/)
            .filter(sentence => sentence.length > 0);

        // Update the display
        wordCount.textContent = `Words: ${words.length}`;
        sentenceCount.textContent = `Sentences: ${sentences.length}`;
    };

    // Add event listener for input changes
    textInput.addEventListener('input', updateCounts);
});