<script setup>
import useMouse from '../hooks/useMouse'
const {x,y} = useMouse()
</script>

<template>
    <div>
        <h2>Mouse x and y</h2>
        <h3>X:{{x}}</h3>
        <h3>Y:{{y}}</h3>
    </div>
</template>