$(document).ready(function() {
  $('#summernote').summernote({    
    height: 200,                  // set editor height    
    minHeight: null,              // set minimum height of editor
    maxHeight: null,              // set maximum height of editor
    focus: true,                  // set focus to editable area after initializing summernote
    lang : 'ko-KR',				        // 기본 메뉴언어 US->KR로 변경
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'italic', 'underline', 'clear']],
      ['fontname', ['fontname']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['height', ['height']],
      ['table', ['table']],
      ['insert', ['link', 'picture', 'hr']],
      ['view', ['fullscreen', 'codeview']],
      ['help', ['help']]
    ],
    callbacks: {
      onImageUpload: function(files, editor, welEditable) {
        for (var i = files.length - 1; i >= 0; i--) {
          sendFile(files[i], this);
        }
      }
    }
  });
});

function sendFile(file, el) {
  var form_data = new FormData();
  form_data.append('file', file);
  $.ajax({
    data: form_data,
    type: "POST",
    url: '${pageContext.request.contextPath }/file/image',
    cache: false,
    contentType: false,
    enctype: 'multipart/form-data',
    processData: false,
    success: function(url) {
      $(el).summernote('editor.insertImage', url);
      $('#imageBoard > ul').append('<li><img src="'+url+'" width="480" height="auto"/></li>');
    }
  });
}