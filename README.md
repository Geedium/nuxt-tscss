```
yarn add @geedium/nuxt-tscss
```

# About
Allows to use CSS in templates.
```vue
<template>
    <div v-css="{
        justifyContent: 'center',
        marginLeft: 1,
    }">
    </div>
</template>
```

## nuxt.config
```bash
modules: ['@geedium/nuxt-tscss']
```

```
tscss: {
    stylesOnly: false
}
```

