# hackathon-3-2023

## SlapGPT

SlapGPT is a platform for creating bespoke, AI-generated music. From a set of user-defined parameters, a prompt is passed to an AI model which generates musical code representing a song. This code is then passed to a music engine which allows for playback, editing, and export of audio. Royalty-free and fully customizable, SlapGPT provides a means for the least artistic, least technically-minded among us to create music to suit their needs.

SlapGPT as an experiment raises questions- what is art? Can a non-human agent create art? What does the new age of AI-generated media bode for art, and for the artist as a profession?

Answers to these questions remain forthcoming. At the moment, SlapGPT generates music that can hardly be called musical, let alone artistic. However, the platform demonstrates a steel thread for a loop of the future to come. Sit back, foolish mortal, and bask in the sounds of SlapGPT.

The platform consists of three layers:
- a React app providing the user a form with options to tailormake any kind of song they desire
- a server which receives the user's input and passes the request to an AI model, receiving a piece of musical code in return
- a music engine which is passed the AI's musical code via OSC (Open Sound Control) socket and loads this data for immediate playback, editing, and export

The present implementation utilizes openai as its AI model, and SonicPI as its musical engine. Owing to the modular construction of the app, these layers can later be replaced with more robust AI models and musical coding tools.

### Requirements
1. SonicPi: https://sonic-pi.net/
2. sendosc CLI tools: https://github.com/yoggy/sendosc
3. OpenAI: https://openai.com/

### Instructions
1. clone this stack
2. touch a .env file with `OPENAI_API_KEY`, set to your openai API key
2. `npm i` from root
3. spin up react app with `npm start` from root
4. spin up server with `npm run server` from root
5. open an instance of SonicPi
6. fill out UI form, submit, and await AI-generated strains and refrains