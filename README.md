```
yarn add @geedium/nuxt-tscss
```

# About
Allows to use CSS in templates.
```vue
<template>
    // @deprecated
    <div v-css="{
        justifyContent: 'center',
        marginLeft: 1,
    }">
    </div>
</template>

<template>
    <component :class="$styled({
        color: 'primary',
        mr: 3,
        ml: 1,
        mt: 2,
        pr: 3
    })">
    </component>
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

