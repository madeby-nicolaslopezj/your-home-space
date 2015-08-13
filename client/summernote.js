var fontSizes = [];

var initial = 8
for (var i = 0; i < 16; i ++) {
  fontSizes.push(String(initial));
  initial++;
}

var initial = 24
for (var i = 0; i < 6; i ++) {
  fontSizes.push(String(initial));
  initial++;
  initial++;
  initial++;
  initial++;
}

Template.orionSummernote.rendered = function () {
    var key = this.data.name;
    var element = $('.summernote[data-schema-key="' + key + '"]');
    var parent = element.closest(".panel-body");
    parent.addClass('summernote-container');
    element.summernote({
        height: 540,
        onImageUpload: function(files, editor, $editable) {
            element.parent().find('.progress').show();
            orion.filesystem.upload({fileList: files, name: files[0].name, folder: 'summernote', canRemove: true}, function(file, error) {
                if (!error) {
                    editor.insertImage($editable, file.url);
                } else {
                    console.log(error, "error uploading file")
                }
                element.parent().find('.progress').hide();
            });
        },
        fontNames: ['Raleway', 'Arial', 'Comic Sans MS', 'Courier New', 'Helvetica Neue', 'Impact', 'Lucida Grande', 'Tahoma', 'Times New Roman', 'Verdana'],
        fontSizes: fontSizes
    });
    element.code(this.data.value);
};
