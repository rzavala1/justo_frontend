import { createIntl, createIntlCache } from "react-intl";

const messages = {
  es: {
    validation: {
      email: "Ingresa tu correo electrónico",
      emailInvalid: "Ingresa un correo electrónico válido",
      emailRequired: "El correo electrónico es obligatorio",
      password: "Ingresa tu contraseña",
      passwordLength: "La contraseña debe tener al menos 8 caracteres",
      passwordRequired: "La contraseña es obligatoria",
      name: "Ingresa tu nombre",
      nameRequired: "El nombre es obligatorio",
    },
    login: {
      emailLabel: "Correo electrónico",
      passwordLabel: "Contraseña",
      loginButton: "Iniciar sesión",
      title:"Inicio de sesión",
      register:"Registro de usuario"
    },register: {
      nameLabel: "Nombre",
      emailLabel: "Correo electrónico",
      passwordLabel: "Contraseña",
      registerButton: "Crear usuario",
      title: "Registro de usuario",
    },

  },
};

const flattenMessages = (
  nestedMessages: Record<string, any>,
  prefix = ""
): Record<string, string> => {
  return Object.keys(nestedMessages).reduce(
    (result: Record<string, string>, key) => {
      const value = nestedMessages[key];
      const messageKey = prefix ? `${prefix}.${key}` : key;

      if (typeof value === "string") {
        result[messageKey] = value;
      } else {
        const nestedResult = flattenMessages(value, messageKey);
        Object.assign(result, nestedResult);
      }

      return result;
    },
    {}
  );
};

const flattenedMessages = flattenMessages(messages.es);

const cache = createIntlCache();
const intl = createIntl({ locale: "es", messages: flattenedMessages }, cache);

export { intl };
