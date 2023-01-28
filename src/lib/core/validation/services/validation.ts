export function all(rules) {
	return (data) => rules.every((isCheckInRule) => isCheckInRule(data));
}

export function createValidator(rules, errors) {
	return function (nameField, valueField, password = null) {
		const result = {
			valid: true,
			errors: {},
		};

		if (password) {
			if (!rules[nameField](valueField, password)) {
				result.valid = false;
				result.errors[nameField] = errors[nameField];
				return result;
			} else {
				return result;
			}
		}

		if (!rules[nameField](valueField)) {
			result.valid = false;
			result.errors[nameField] = errors[nameField];
		}
		// Object.keys(rules).forEach((key) => {
		// 	console.log(key);
		// 	const field = key;
		// 	const validateRules = rules[field];

		// 	if (!validateRules) {
		// 		//todo для чего эта проверка
		// 		return;
		// 	}

		// 	if (!validateRules(data)) {
		// 		result.valid = false;
		// 		result.errors[field] = errors[field];
		// 	}
		// });

		return result;
	};
}
