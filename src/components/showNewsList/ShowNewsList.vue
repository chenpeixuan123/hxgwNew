<template>
  <div class="activeConfig">
    <el-button class="btn" type="primary" size="mini" @click="toEditor(0)">新增</el-button>
    <template>
      <el-table :data="newsList" size="mini" stripe style="width: 100%">
        <el-table-column prop="id" width="160" label="ID"></el-table-column>
        <el-table-column prop="title" width="690" label="标题"></el-table-column>

        <el-table-column prop="parentId" width="80" label="所属类别">
          <template slot-scope="scope">
            <span v-if="scope.row.parentId==1">党政要闻</span>
            <span v-if="scope.row.parentId==2">他山之石</span>
            <span v-if="scope.row.parentId==3">公司发展</span>
            <span v-if="scope.row.parentId==4">员工风采</span>
          </template>
        </el-table-column>
        <el-table-column prop="gmtCreate" label="创建日期">
          <template slot-scope="scope">
            <span>{{scope.row.gmtCreate.slice(0,10)}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" @click="toEditor(scope.row.id)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination
                background
                :page-size="15"
                @current-change="changePage"
                layout="prev, pager, next"
                :total="total"
        ></el-pagination>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "ActiveConfig",
  data() {
    return {
      // tinymce的绑定值
      url: this.$Config.url,
      newsList: [], //总的分页
      total: 1
    };
  },
  mounted() {
    this.pageList();
  },
  methods: {
    handleDelete(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.deleteDetail(id);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    deleteDetail(parentId) {
      const that = this;
      this.axios(
        this.url + "/eduservice/detail/deleteDetail?parentId=" + parentId
      )
        .then(res => {
          if (res.data.code == 200) {
            that.$message({
              type: "success",
              message: "删除成功!"
            });
            that.pageList();
          } else {
            that.$message({
              type: "success",
              message: "删除失败!"
            });
          }
        })
        .catch(res => {});
    },
    toEditor(id) {
      if (id == 0) {
        //新增
        this.$router.push({ name: "editor" });
      } else {
        //编辑
        this.$router.push({ name: "editor", params: { id } });
      }
    },
    pageList(currentPage = 1) {
      const that = this;
      this.axios(
        this.url +
          "/eduservice/allNewsTitle/seleteAllNewsTitle/" +
          currentPage +
          "/15"
      )
        .then(res => {
          if (res.data.code == 200) {
            that.newsList = res.data.data.item;
            that.total = res.data.data.total;
          }
        })
        .catch(res => {});
    },
    changePage(page) {
      this.pageList(page);
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  z-index: 99999;
}
.activeConfig {
  padding-top: 20px;
  width: 1196px;
  margin: 0 auto;
  padding-bottom: 50px;
  min-height: 600px;
}
.el-pagination {
  float: right;
  margin-top: 20px;
}
  .page{
    padding-bottom: 30px;
  }
</style>