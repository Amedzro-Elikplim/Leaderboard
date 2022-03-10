import { BaseURL, UniqueID } from './API.js';

const GetScore = async () => {
  try {
    const response = await fetch(`${BaseURL}games/${UniqueID}/scores/`);
    const result = await response.json();

    console.log(result);
  } catch (error) {
    alert(new Error(error));
  }
};

export default GetScore;