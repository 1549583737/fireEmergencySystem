<template>
  <div class="page-table" ref="pageTable">
    <el-table
      :height="tableHeight"
      :data="tableData"
      :row-class-name="tableClass"
      stripe
    >
      <el-table-column
        v-for="config in tableConfig"
        :key="config.prop"
        :prop="config.prop"
        :label="config.label"
        show-overflow-tooltip
        align="center"
      >
        <template slot-scope="{ row }">
          <div v-if="config.label === '消防门状态'">
            <span
              :style="{
                color: row[config.prop] === '开启' ? '#09F23F' : 'red',
              }"
              >{{ row[config.prop] }}
            </span>
          </div>
          <div
            v-else-if="
              config.label === '异常率' || config.label === '报警处理率'
            "
          >
            <span style="color: red">{{ row[config.prop] }}</span>
          </div>
          <div v-else-if="config.label === '状态'">
            <span
              v-if="row[config.prop] === '待命'"
              style="
                display: inline-block;
                width: 60px;
                height: 22px;
                color: #00d4f9;
                background: #00d4f740;
                border: 1px solid #00d4f7;
                cursor: pointer;
              "
            >
              {{ row[config.prop] }}
            </span>
            <span
              v-if="row[config.prop] === '故障'"
              style="
                display: inline-block;
                width: 60px;
                height: 22px;
                color: #ff0c00;
                background: #ff151540;
                border: 1px solid #ff151540;
                cursor: pointer;
              "
              >{{ row[config.prop] }}</span
            >
            <span
              v-if="row[config.prop] === '维保'"
              style="
                display: inline-block;
                width: 60px;
                height: 22px;
                color: #ffff00;
                background: #ffff0040;
                border: 1px solid #ffff00;
                cursor: pointer;
              "
              >{{ row[config.prop] }}</span
            >
          </div>
          <div v-else>
            {{ row[config.prop] }}
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "FTable",
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    tableConfig: {
      type: Array,
      default: () => [],
    },
    tableHeight: {
      type: [String, Number],
      default: 0,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    //偶数加背景色
    tableClass({ row, rowIndex }) {
      if (rowIndex % 2 == 1) {
        //奇数行，序号不能被2整除
        return "even-row";
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.page-table {
  //* 表格整体背景色 */
  ::v-deep .el-table,
  ::v-deep .el-table__expanded-cell {
    background-color: transparent !important;
  }
  // 修改头部背景
  ::v-deep .el-table th {
    background-color: rgb(7, 96, 139, 0.3);
  }
  ::v-deep .el-table thead tr {
    font-family: PingFangSC-Medium;
    font-weight: 500;
    font-size: 14px;
    color: #00d4f7;
    line-height: 14px;
  }

  //修改行背景
  ::v-deep .el-table tr {
    background-color: transparent;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
    text-align: center;
  }

  ::v-deep .el-table tbody tr.even-row {
    background-color: rgb(7, 96, 139, 0.3);
    &:hover {
      background: rgba(246, 146, 17, 0.5);
    }
  }

  ::v-deep
    .el-table--striped
    .el-table__body
    tr.el-table__row--striped
    td.el-table__cell {
    background-color: transparent !important;
  }
  ::v-deep .el-table--border::after,
  .el-table--group::after,
  .el-table::before {
    background-color: transparent !important;
  }

  ::v-deep .el-table td,
  .el-table th.is-leaf {
    border: none;
  }

  ::v-deep {
    .el-table td.el-table__cell,
    .el-table th.el-table__cell.is-leaf {
      border: none;
    }
    .el-table__body-wrapper {
      &::-webkit-scrollbar {
        height: 5px;
        width: 5px;
      }
      &::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 8px; /*滚动条的圆角*/
      }
      &::-webkit-scrollbar-thumb {
        background-color: rgb(0, 195, 255, 0.5);
        border-radius: 8px; /*滚动条的圆角*/
      }
      &::-webkit-scrollbar-thumb:hover {
        background-color: #409eff;
      }
    }
    //修改行高
    .el-table td,
    .el-table .el-table__cell {
      padding: 8px 0px; //默认上下是padding12px
    }
  }

  ::v-deep .el-table th.gutter {
    width: 5px; // 表头右侧空白块宽度，与修改的滚动条样式宽度保持一致，否则会造成表头与内容border错乱
  }
  ::v-deep .el-table colgroup col[name="gutter"] {
    width: 5px; // gutter列设置宽度，与上保持一致
  }
  ::v-deep .el-table__body {
    width: 100% !important; // 内容宽度，设置为100%，最高级
  }
  //修改鼠标选中行
  ::v-deep .el-table tbody tr:hover > td {
    background-color: rgba(246, 146, 17, 0.5) !important;
  }
}
</style>
