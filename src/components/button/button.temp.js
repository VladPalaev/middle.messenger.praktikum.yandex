export const buttonTemp = `<button class="{{ style }}" 
{{#if type}}
type="{{ type }}"
{{else}}
{{/if}}
{{#if id}}
id="{{ id }}"
{{else}}
{{/if}}
>{{ label  }}</button>`