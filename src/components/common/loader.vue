<template>
    <div class="loader" :class="{hide:hideIt}">
       <div class="loader-wobble">LOADING</div>
    </div>
</template>
<script>
export default {
    computed:{
        hideIt() {
            return this.$store.getters.hideIt
        }
    }
}
</script>
<style scoped>
div.loader {
        height: 100vh;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 2;
    background-color: rgb(0, 0, 0);
}
.loader.hide {
    display: none;
}

.loader-wobble {
  font-size: 1em;
  
  display: inline-block;
  width: 6em;
  height: 1em;
  line-height: 1.3;
  position: relative;
  color: #f49522;
  font-weight: bold;
  text-align: center;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  /* border-bottom: 0.1em solid; */
  margin-left: -5em;
  transform: translateX(50%);
  -webkit-animation: loadingText 1s infinite cubic-bezier(1, -2.3, 1, 2.5) alternate, loadingBar 8s infinite cubic-bezier(0.445, 0.050, 0.550, 0.950) alternate;
          animation: loadingText 1s infinite cubic-bezier(1, -2.3, 1, 2.5) alternate, loadingBar 8s infinite cubic-bezier(0.445, 0.050, 0.550, 0.950) alternate;
}
#toggle:checked ~ #sect .loader-wobble {
  -webkit-animation: loadingTextMove 1s infinite cubic-bezier(1, -2.3, 1, 2.5) alternate, loadingText 1s infinite cubic-bezier(1, -2.3, 1, 2.5) alternate, loadingBar 8s infinite cubic-bezier(0.445, 0.050, 0.550, 0.950) alternate;
          animation: loadingTextMove 1s infinite cubic-bezier(1, -2.3, 1, 2.5) alternate, loadingText 1s infinite cubic-bezier(1, -2.3, 1, 2.5) alternate, loadingBar 8s infinite cubic-bezier(0.445, 0.050, 0.550, 0.950) alternate;
  filter: drop-shadow(0.2em 0.2em 0.2em rgba(0, 0, 0, 0.5));
}
.loader-wobble:before, .loader-wobble:after {
  content: "";
  width: 7em;
  height: 7em;
  position: absolute;
  top: -3em;
  left: -0.5em;
  right: 0;
  bottom: 0;
  border-radius: 50%;
}
.loader-wobble:before {
  box-shadow: inset 0 0 0 0.2em rgba(8, 61, 86, 0.5);
  -webkit-animation: loadingInner 1s infinite cubic-bezier(1, -2.3, 1, 2.5) alternate;
          animation: loadingInner 1s infinite cubic-bezier(1, -2.3, 1, 2.5) alternate;
}
.loader-wobble:after {
  color: #083D56;
  border-radius: 50%;
  border: 0.2em dashed;
  border-top: 0.2em solid #0E5F76;
  transform-origin: center center;
  -webkit-animation: loading 1s infinite cubic-bezier(0.6, 0, 0.4, 1);
          animation: loading 1s infinite cubic-bezier(0.6, 0, 0.4, 1);
}

@-webkit-keyframes loading {
  to {
    transform: rotate(360deg);
  }
}

@keyframes loading {
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loadingInner {
  to {
    transform: scale(0);
  }
}
@keyframes loadingInner {
  to {
    transform: scale(0);
  }
}
/* @-webkit-keyframes loadingText {
  0% {
    color: #0E5F76;
    width: 0em;
  }
  100% {
    color: #081E3F;
    width: 4em;
  }
}
@keyframes loadingText {
  0% {
    color: #0E5F76;
    width: 0em;
  }
  100% {
    color: #081E3F;
    width: 4em;
  }
} */
/* @-webkit-keyframes loadingTextMove {
  0% {
    text-indent: 1em;
  }
  100% {
    text-indent: -1em;
  }
}
@keyframes loadingTextMove {
  0% {
    text-indent: 1em;
  }
  100% {
    text-indent: -1em;
  }
}
@-webkit-keyframes loadingBar {
  0% {
    width: 0em;
  }
  100% {
    width: 6em;
  }
} */
/* @keyframes loadingBar {
  0% {
    width: 0em;
  }
  100% {
    width: 6em;
  }
} */
</style>