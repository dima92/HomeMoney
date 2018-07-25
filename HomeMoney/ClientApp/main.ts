import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AuthModule } from "./app/auth/auth.module";
const platform = platformBrowserDynamic();
platform.bootstrapModule(AuthModule);

// для перезагузки приложения при изменениях в исходном коде
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
        // Перед перезапуском приложения создаем новый элемент app, которым заменяем старый
        const oldRootElem = document.querySelector('app');
        const newRootElem = document.createElement('app');
        oldRootElem!.parentNode!.insertBefore(newRootElem, oldRootElem);
        platform.destroy();
    });
}