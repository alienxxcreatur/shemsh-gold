(function (global) {
  const commonPasswords = new Set([
    "12345678",
    "1234567890",
    "12345678910",
    "password1",
    "password123",
    "qwerty12345",
    "shemsh12",
    "shemsh1234"
  ]);

  const rules = [
    {
      key: "length",
      label: "حداقل ۸ کاراکتر",
      message: "رمز عبور باید حداقل ۸ کاراکتر باشد.",
      test: (value) => Array.from(value).length >= 8
    },
    {
      key: "letter",
      label: "حداقل یک حرف انگلیسی",
      message: "رمز عبور باید حداقل یک حرف انگلیسی داشته باشد.",
      test: (value) => /[A-Za-z]/.test(value)
    },
    {
      key: "number",
      label: "حداقل یک عدد",
      message: "رمز عبور باید حداقل یک عدد داشته باشد.",
      test: (value) => /[0-9]/.test(value)
    },
    {
      key: "common",
      label: "جزو رمزهای رایج نباشد",
      message: "این رمز خیلی رایج است. رمز دیگری انتخاب کنید.",
      test: (value) => Boolean(value) && !commonPasswords.has(value.toLowerCase())
    }
  ];

  const evaluate = (value = "") => rules.map((rule) => ({
    key: rule.key,
    label: rule.label,
    message: rule.message,
    met: rule.test(String(value))
  }));

  global.ShemshPasswordPolicy = Object.freeze({
    evaluate,
    validate(value = "") {
      const results = evaluate(value);
      const unmet = results.find((rule) => !rule.met);
      return { valid: !unmet, message: unmet?.message || "", results };
    }
  });
})(window);
