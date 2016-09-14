# a11y-hacking
Sample files experimenting with a10ty 

# Notes
jQuery UI dialog is not good, because it does not trap focus on the modal, and it does not hide background elements from ATs. 

If you have `aria-live` on a modal with Angular 1, JAWS 16 will read the title multiple times. If you do not have `aria-live`, JAWS will not automatically read out the `aria-describedby` element. I don't know if there's some JAWS setting that will enable this. I found several settings that seemed promising but they didn't change the behavior. The behavior of reading the title multiple times occurs regardless of the size of content of the modal.

I wonder if `aria-live` messes it up because of the way that AngularJS compiles the DOM. It does not use a virtual DOM, so it just works straight out of the real DOM, which may confuse screen readers. The AngularJS 2 ng-bootstrap module works better. JAWS reads "document" instead of "dialog", but it also successfully reads all the content. The modal uses `role=document` instead of `role=dialog`. 

Just swapping Angular 1 modals to use `role=document` makes everything worse. JAWS and macOS VoiceOver do not read the content properly. They only read the button. And, of course, they do not announce that it's a modal. 

At the very least, Angular 2 may help the `ng-repeat` issue: https://github.com/angular/angular.js/issues/15079.

