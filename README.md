# a11y-hacking
Sample files experimenting with a10ty 

# Notes
jQuery UI dialog is not good, because it does not trap focus on the modal, and it does not hide background elements from ATs. 

If you have `aria-live` on a modal with Angular 1, JAWS 16 will read the title multiple times. If you do not have `aria-live`, JAWS will not automatically read out the `aria-describedby` element. I don't know if there's some JAWS setting that will enable this. I found several settings that seemed promising but they didn't change the behavior. The behavior of reading the title multiple times occurs regardless of the size of content of the modal.