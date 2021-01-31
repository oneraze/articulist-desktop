var quill = new Quill("#editor-container", {
    modules: {
      syntax: true,
      toolbar: "#toolbar-container",
    },
    placeholder: "Start writing...",
    theme: "snow",
})