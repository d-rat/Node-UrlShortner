// to check if a url is valid or not

function validateUrl(value) {
	return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm.test(
		value
	);
}

module.exports = { validateUrl };
