import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          home: 'Home',
          news: 'News',
          profile: 'Profile',
          logout: 'Log out',
          login: 'Log In',
          dialogContent: 'Please enter your name and email to log in.',
          nameField: 'Name',
          passwordField: 'Password',
          userMenu: 'User Menu',
          cancel: 'Cancel',
          welcomeText: 'Welcome to The News App!',
          welcome: 'Welcome',
          delete: 'Delete',
          loadMore: 'Load More',
          notFound: 'Sorry, page not found',
          correctLogIn: 'Successful log in',
          errorLogIn: 'Please correct your login or password to log in',
          language: 'Language',
          ukrainian: 'Ukrainian',
          english: 'English',
        },
      },
      ua: {
        translation: {
          home: 'Головна',
          news: 'Новини',
          profile: 'Профіль',
          logout: 'Вихід',
          login: 'Вхід',
          dialogContent: 'Введіть, будь ласка, ваш логін та пароль, щоб увійти',
          nameField: 'Логін',
          passwordField: 'Пароль',
          userMenu: 'Меню користувача',
          cancel: 'Відміна',
          welcomeText: 'Вітаємо у додатку News!',
          welcome: 'Вітаємо',
          delete: 'Видалити',
          loadMore: 'Завантажити більше',
          notFound: 'Вибачте, сторінку не знайдено',
          correctLogIn: 'Логінізація пройшла успішно',
          errorLogIn: 'Введіть, будь ласка, коректні логін та пароль',
          language: 'Вибір мови',
          ukrainian: 'Українська',
          english: 'Англійська',
        },
      },
    },
  });

export default i18n;
