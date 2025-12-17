/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from '@keycloakify/angular/login';
import type { ThemeName } from '../kc.gen';

/** @see: https://docs.keycloakify.dev/features/i18n */
const { getI18n, ofTypeI18n } = i18nBuilder.withThemeName<ThemeName>()
 .withCustomTranslations({
        en: {
            doLogIn: "Login ",
            loginAccountTitle:"Hello Again!",
            // loginAccountSubtitle: "Welcome Back"
        },
        // cspell: disable
        fr: {
         loginAccountTitle: "Bonjour à nouveau !",
    // loginAccountSubtitle: "Bienvenue",
    doLogIn: "Se connecter",
        }
        // cspell: enable
    }).build();

type I18n = typeof ofTypeI18n;

export { getI18n, type I18n };
