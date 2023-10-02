function generatePrompt(userInput: string): string {
  return `Generate a detailed description of the image, without unnecessary and repetitive words, only specifics 
    (text to help generate an image, create a masterpiece) 
    in English at approximately max_tokens: 60 based on the following input data:

User Input: ${userInput}

Description:`;
}

export default generatePrompt;