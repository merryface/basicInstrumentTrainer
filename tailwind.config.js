export default {
  content: ['./src/**/*.{html,js,ts,svelte}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "synthwave",
      "dark",
      "cupcake",
      "bumblebee",
      "cyberpunk",
      "night"
    ]
  }
}

