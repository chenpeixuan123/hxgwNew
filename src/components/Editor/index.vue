<template>
  <div class="activeConfig">
    <el-form ref="form" :model="form" label-width="80px" size="mini" :inline="true">
      <el-form-item label="标题大类">
        <el-select v-model="form.newsName" placeholder="请选择标题大类">
          <el-option label="党政要闻" value="1"></el-option>
          <el-option label="他山之石" value="2"></el-option>
          <el-option label="公司发展" value="3"></el-option>
          <el-option label="员工风采" value="4"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="文章标题">
        <el-input v-model="form.name" placeholder="请输入文章标题" style="width:500px;"></el-input>
      </el-form-item>
    </el-form>
    <div class="activeConfig-container">
      <Editor id="tinymce" v-model="tinymceHtml" :init="editorInit" />
      <el-button type="primary" size="mini" class="btn" @click="save">保存</el-button>
    </div>
  </div>
</template>

<script>
// 引入组件
import qs from "qs";
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
// 引入富文本编辑器主题的js和css
import "tinymce/themes/silver/theme.min.js";
import "tinymce/skins/ui/oxide/skin.min.css";
// 扩展插件
import "tinymce/plugins/image";
import "tinymce/plugins/link";
import "tinymce/plugins/code";
import "tinymce/plugins/table";
import "tinymce/plugins/lists";
import "tinymce/plugins/wordcount";
// 引入api
// import { uploadImgage } from '@/api/activeConfig'

export default {
  name: "ActiveConfig",
  components: { Editor },
  data() {
    return {
      // tinymce的绑定值
      url: this.$Config.url,
      tinymceHtml: "",
      currentId: '',
      titleList: [],
      content: {},
      form: {
        newsName: "", //大类标题
        name: "" //标题名称
      },
      // tinymce的初始化配置
      editorInit: {
        selector: "#tinymce",
        language_url: "/tinymce/langs/zh_CN.js",
        language: "zh_CN",
        plugins:
          "print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help emoticons autosave bdmap indent2em autoresize lineheight formatpainter axupimgs",
        toolbar:
          "code undo redo restoredraft | cut copy paste pastetext image | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | table media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | bdmap indent2em lineheight formatpainter axupimgs",
        skin_url: "/tinymce/skins/ui/oxide",
        height: 600,
        fontsize_formats: "12px 14px 16px 18px 24px 36px 48px 56px 72px",
        images_upload_handler: function(blobInfo, succFun, failFun) {
          var xhr, formData;
          var file = blobInfo.blob(); //转化为易于理解的file对象
          xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.open("POST", "http://gshxkj.com.cn/eduoss/fileoss");
          xhr.onload = function() {
            var json;
            if (xhr.status != 200) {
              failFun("HTTP Error: " + xhr.status);
              return;
            }
            json = JSON.parse(xhr.responseText);
            if (!json || typeof json.location != "string") {
              failFun("Invalid JSON: " + xhr.responseText);
              return;
            }
            succFun(json.location);
          };
          formData = new FormData();
          formData.append("file", file, file.name); //此处与源文档不一样
          xhr.send(formData);
        }
      }
    };
  },
  mounted() {
    let id = this.$route.params.id;
    console.log(id)
    if (id) {
      this.currentId = id;
      this.getTitle(id);
    }else{
      this.currentId ='';
    }

    tinymce.init({});
  },
  methods: {
    getTitle(id) {
      const that = this;
      this.axios
        .get(this.url + "/eduservice/allNewsTitle/getAllNewsTitle")
        .then(res => {
          if (res.data.code == 200) {
            that.titleList = res.data.data.item;
            that.common(id);
          }
        })
        .catch(res => {});
    },
    // 图片上传
    common(id) {
      const that = this;
      this.axios
        .get(this.url + "/eduservice/detail/newsDetail/" + id)
        .then(res => {
          if (res.data.code == 200) {
            that.content = res.data.item;
            that.form.newsName = res.data.data.item.newsId;
            that.tinymceHtml = res.data.data.item.content;
            that.titleList.forEach((item, index) => {
              if (res.data.data.item.parentId == item.id) {
                that.form.name = item.title;
              }
            });
          }
        })
        .catch(res => {});
    },
    save() {
      const that = this;
      let data = {
        content: this.tinymceHtml.toString(),
        newsId: this.form.newsName,
        title: this.form.name,
        parentId: this.currentId
      };
      this.axios
        .post(this.url + "/eduservice/detail/admAddDetail", qs.stringify(data))
        .then(res => {
          if (res.data.code == 200) {
            that.$message({
              message: "保存成功",
              type: "success"
            });
            that.$router.push({name:"showNewsList"})
          } else {
            that.$message({
              message: "保存失败",
              type: "error"
            });
          }
        })
        .catch(res => {});
    }
  }
};
</script>

<style lang="scss" scoped>
.activeConfig {
  padding-top: 20px;
  width: 1196px;
  margin: 0 auto;
  padding-bottom: 50px;
  min-height: 600px;
}
.btn {
  margin: 20px 50px 20px 0;
  float: right;
}
</style>