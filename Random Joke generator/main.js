const joke = document.querySelector('#joke');
btn = document.querySelector('#btn');
console.log(btn);
const url =
	'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

const getJoke = () => {
	joke.classList.remove('fade');
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			joke.textContent = data.joke;
			joke.classList.add('fade');
		});
};
btn.addEventListener('click', () => {
	getJoke();
});
getJoke();
