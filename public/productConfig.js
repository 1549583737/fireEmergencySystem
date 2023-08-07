const productConfig = {
  zonePersonCount: 215, // 园区人数总数
  left: {
    // 消防队值班
    fireLeaderShift: {
      title: "消防队值班",
      tableConfig: [
        {
          prop: "troops",
          label: "值班中队",
        },
        {
          prop: "responser",
          label: "中队负责人",
        },
        {
          prop: "matters",
          label: "值班事项",
        },
      ],
      tableData: [
        {
          troops: "一中队",
          responser: "王二",
          matters: "值班事项1",
        },
        {
          troops: "二中队",
          responser: "张三",
          matters: "值班事项2",
        },
        {
          troops: "三中队",
          responser: "李四",
          matters: "值班事项3",
        },
      ],
    },
    // 消防车辆值守情况
    fireCar: {
      title: "消防车辆值守情况",
      tableConfig: [
        {
          prop: "fireCarName",
          label: "值班中队",
        },
        {
          prop: "responser",
          label: "中队负责人",
        },
        {
          prop: "status",
          label: "状态",
        },
      ],
      tableData: [
        {
          fireCarName: "20米高喷射车",
          responser: "王二",
          status: "待命",
        },
        {
          fireCarName: "20米高喷射车",
          responser: "张三",
          status: "故障",
        },
        {
          fireCarName: "20米高喷射车",
          responser: "李四",
          status: "维保",
        },
      ],
    },
    // 消防栓监测
    fireHydrant: {
      title: "消防栓监测",
      tableConfig: [
        {
          prop: "deviceName",
          label: "装置名称",
        },
        {
          prop: "fireHydrantCount",
          label: "消防栓数量",
        },
        {
          prop: "normalCount",
          label: "正常数量",
        },
        {
          prop: "abnormalCount",
          label: "异常数量",
        },
        {
          prop: "abnormalRate",
          label: "异常率",
        },
      ],
      tableData: [
        {
          deviceName: "热电一期",
          fireHydrantCount: "100",
          normalCount: "99",
          abnormalCount: "1",
          abnormalRate: "1%",
        },
        {
          deviceName: "热电二期",
          fireHydrantCount: "100",
          normalCount: "99",
          abnormalCount: "1",
          abnormalRate: "1%",
        },
        {
          deviceName: "气化",
          fireHydrantCount: "100",
          normalCount: "99",
          abnormalCount: "1",
          abnormalRate: "1%",
        },
      ],
    },
    // 视频报警统计
    videoAlarmStatistics: {
      title: "视频报警统计",
      tableConfig: [
        {
          prop: "deviceName",
          label: "装置名称",
        },
        {
          prop: "fireAlarmCount",
          label: "火灾报警",
        },
        {
          prop: "smokeAlarmCount",
          label: "烟雾报警",
        },
        {
          prop: "alarmDealRate",
          label: "报警处理率",
        },
      ],
      tableData: [
        {
          deviceName: "功能化学品事业部柠檬醛装置",
          fireAlarmCount: "0",
          smokeAlarmCount: "0",
          alarmDealRate: "100%",
        },
        {
          deviceName: "电池材料公司六氟磷酸锂装置",
          fireAlarmCount: "0",
          smokeAlarmCount: "0",
          alarmDealRate: "100%",
        },
        {
          deviceName: "物资装备部设备类仓",
          fireAlarmCount: "0",
          smokeAlarmCount: "0",
          alarmDealRate: "100%",
        },
      ],
    },
  },
  right: {
    // 物资统计
    materialStatistics: {
      title: "物资统计",
      list: [
        {
          label: "消防人员",
          value: "76",
          style: {
            color: "#00D4F7",
          },
          imgUrl: "./assets/fireFighter.png",
        },
        {
          label: "消防车辆",
          value: "26",
          style: {
            color: "#FF0303",
          },
          imgUrl: "./assets/fireCar.png",
        },
        {
          label: "消防设施",
          value: "4012",
          style: {
            color: "#09F23F",
          },
          imgUrl: "./assets/fireFacilities.png",
        },
        {
          label: "火灾报警点",
          value: "0",
          style: {
            color: "#00D4F7",
          },
          imgUrl: "./assets/fireAlarmPoint.png",
        },
        {
          label: "应急物资",
          value: "59",
          style: {
            color: "#FF0303",
          },
          imgUrl: "./assets/emGoods.png",
        },
        {
          label: "重大危险源",
          value: "7",
          style: {
            color: "#09F23F",
          },
          imgUrl: "./assets/maxRisk.png",
        },
        {
          label: "储罐",
          value: "1046",
          style: {
            color: "#00D4F7",
          },
          imgUrl: "./assets/storeTank.png",
        },
        {
          label: "库房",
          value: "4",
          style: {
            color: "#FF0303",
          },
          imgUrl: "./assets/storeRoom.png",
        },
      ],
    },
    // 消防巡检
    firePatrolInspection: {
      title: "消防巡检",
      list: [
        {
          label: "本月巡检任务数",
          value: "9073",
        },
        {
          label: "本月已完成巡检任务数",
          value: "0",
        },
        {
          label: "消防巡检完成率",
          value: "0%",
        },
        {
          label: "漏检数",
          value: "17758",
        },
        {
          label: "未处理问题总数",
          value: "21",
        },
      ],
    },
    // 报警消防联动
    alarmFireInteraction: {
      title: "报警消防联动",
      tableConfig: [
        {
          prop: "fireDoorName",
          label: "消防门名称",
        },
        {
          prop: "fireDoorStatus",
          label: "消防门状态",
        },
      ],
      tableData: [
        {
          fireDoorName: "1号平台门",
          fireDoorStatus: "开启",
        },
        {
          fireDoorName: "2号平台门",
          fireDoorStatus: "关闭",
        },
        {
          fireDoorName: "3号平台门",
          fireDoorStatus: "开启",
        },
        {
          fireDoorName: "4号平台门",
          fireDoorStatus: "关闭",
        },
        {
          fireDoorName: "5号平台门",
          fireDoorStatus: "开启",
        },
        {
          fireDoorName: "6号平台门",
          fireDoorStatus: "开启",
        },
      ],
    },
  },
  // 底部菜单列表
  bottomMenuList: [
    {
      label: "消防联动",
      imgUrl: "./assets/fireInteraction.png",
      imgUrlActive: "./assets/fireInteraction_active.png",
    },
    {
      label: "应急通讯录",
      imgUrl: "./assets/emPhoneList.png",
      imgUrlActive: "./assets/emPhoneList_active.png",
    },
    {
      label: "气象报警",
      imgUrl: "./assets/weatherAlarm.png",
      imgUrlActive: "./assets/weatherAlarm_active.png",
    },
    {
      label: "气象信息",
      imgUrl: "./assets/weatherInfo.png",
      imgUrlActive: "./assets/weatherInfo_active.png",
    },
    {
      label: "视频监控",
      imgUrl: "./assets/videoMonitor.png",
      imgUrlActive: "./assets/videoMonitor_active.png",
    },
    {
      label: "特殊监控",
      imgUrl: "./assets/specialMonitor.png",
      imgUrlActive: "./assets/specialMonitor_active.png",
    },
  ],
};
