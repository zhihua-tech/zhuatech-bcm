/* Copyright 2026 上海如静知华信息科技有限公司 */
export const domain={
 code:'BCM',systemName:'业务连续性管理平台',englishName:'BUSINESS CONTINUITY MANAGEMENT',theme:{primary:'#4c6175',dark:'#293641',accent:'#c78b45'},
 workspace:'风险管理部 / 连续性办公室',fieldWorkspace:'华东运营基地',period:'2026-08-01 · 台风响应窗口',liveText:'关键业务状态于 10:31 更新',fieldContextLabel:'当前响应单元',fieldContext:'华东基地 · 二级戒备',fieldUser:'叶川',fieldRole:'连续性协调员',adminUser:'沈知',adminRole:'业务连续性负责人',
 adminTitle:'企业韧性指挥中心',adminBreadcrumb:'业务连续性 / 全局态势',adminSubtitle:'集中查看关键业务、恢复目标、资源准备、事件响应和演练整改状态。',exportAction:'生成管理层态势报告',createAction:'启动响应事件',
 chartTitle:'关键业务恢复就绪趋势',chartSubtitle:'恢复能力评分 / 管理目标',chartLabels:['1月','2月','3月','4月','5月','6月','7月','8月','9月'],loadTitle:'业务单元恢复准备度',loadSubtitle:'已验证能力占恢复要求比例',recordsTitle:'重点连续性任务',recordsSubtitle:'按业务影响、RTO 与截止时间排序',issueTitle:'韧性风险提示',issueSubtitle:'需要连续性办公室协调的缺口',
 recordName:'连续性任务',itemName:'关键业务 / 场景',unitName:'责任单元',batchName:'响应等级',planName:'目标时长',doneName:'预计恢复',exceptionName:'差距',unitLabel:'小时',
 listBreadcrumb:'连续性运营 / 任务台账',listSubtitle:'管理业务影响分析、策略建设、预案、演练、事件响应与整改关闭。',listSummary:[['关键业务','36'],['有效预案','42'],['待整改缺口','13'],['重大风险','4',true]],tabs:['全部','待评估','准备中','验证中','已关闭'],
 fieldBreadcrumb:'事件响应 / 协调工作台',fieldTitle:'华东运营基地响应台',fieldSubtitle:'当前 5 个响应任务 · 2 个资源缺口 · 连续性协调员叶川',fieldSecondary:'查看指挥通讯录',reportAction:'更新响应状态',fieldNoticeTitle:'二级响应机制已激活',fieldNotice:'业务、IT、设施与供应链联络人均已签到',
 steps:['影响确认','响应启动','资源切换','业务恢复','复盘关闭'],documentAction:'打开连续性预案',printAction:'下载行动清单',resourceCardTitle:'恢复资源状态',resourceValueLabel:'可用资源包',resourceHealthLabel:'恢复就绪度',quickSubtitle:'连续性响应快捷入口',quickActions:[['状态更新','/shopfloor/report','恢复进度与业务影响'],['资源请求','/shopfloor/material','场地、人员、系统与供应商'],['预案查询','/shopfloor/resources','场景、步骤与联络人'],['重大升级','/shopfloor/andon','业务中断与恢复超时']],
 reportDefaults:[4,1],reportTitle:'业务恢复状态更新',reportSubtitle:'记录预计恢复时长、未关闭缺口和响应说明。',reportSuccess:'响应状态已更新并通知指挥团队',reportPlaceholder:'填写业务影响、已执行措施、资源诉求和下一检查点',reportFootnote:'提交后写入事件时间线并重算恢复预测',ruleTitle:'关键业务恢复目标',ruleSubtitle:'BCP-EAST-OPS · V3.8',rules:[['恢复时间目标','≤ 4 小时'],['数据恢复点','≤ 30 分钟'],['最低服务水平','60%'],['预案状态','有效',true]],fieldTotals:[['36','关键业务'],['94%','预案有效率'],['13','待整改缺口'],['88.6','恢复就绪评分']],
 adminMenus:[['/admin','home','韧性指挥中心'],['/admin/work-orders','order','连续性任务'],['/admin/samples','box','关键业务'],['/admin/schedule','calendar','演练日历'],['/admin/methods','process','恢复策略'],['/admin/reviews','quality','影响评估'],['/admin/resources','machine','恢复资源'],['/admin/report','chart','韧性分析']],
 fieldMenus:[['/shopfloor','home','响应工作台'],['/shopfloor/report','report','状态更新'],['/shopfloor/tasks','order','响应任务'],['/shopfloor/material','box','资源请求'],['/shopfloor/resources','machine','预案查询'],['/shopfloor/andon','risk','重大升级',2]],
 moduleTitles:{tasks:['响应任务','查看业务影响、RTO、责任人与行动期限'],material:['资源请求','申请备用场地、人员、系统与外部资源'],resources:['预案查询','查看场景触发条件、步骤和联络链'],andon:['重大升级','登记业务中断、恢复超时和次生风险'],samples:['关键业务','维护影响等级、依赖关系和恢复目标'],schedule:['演练日历','协调桌面推演、技术切换和综合演练'],methods:['恢复策略','配置替代流程、资源方案与恢复顺序'],reviews:['影响评估','执行业务影响分析和演练结果评审'],report:['韧性分析','分析准备度、恢复表现和缺口趋势']},
 tagline:'让企业在中断发生时依然保持关键业务运行',storyTitle:'从业务影响分析到真实恢复，<br/>每一项韧性能力都经过验证。',storyText:'连接关键业务、恢复目标、预案、资源与事件响应的企业韧性底座。',pattern:[1,2,5,8,11,12,16,19,22,23,26,30],loginStats:[['88.6','恢复就绪评分'],['42','有效连续性预案'],['13','开放整改缺口']],loginTitle:'企业韧性指挥中心',adminDemo:'业务 / 预案 / 演练',fieldDemo:'响应 / 资源 / 恢复'
}
export const records=[
 {no:'BCM-260801-018',name:'华东订单履约连续性响应',code:'BIZ-ORDER-FUL',unit:'华东运营基地',group:'供应链运营',plan:4,done:3,exception:1,due:'08-01',batch:'二级响应',status:'恢复中',progress:72,priority:'加急'},
 {no:'BCM-260801-021',name:'客户服务异地坐席切换',code:'BIZ-CUSTOMER',unit:'全国服务中心',group:'客户运营',plan:2,done:2,exception:0,due:'08-01',batch:'三级响应',status:'验证中',progress:88,priority:'正常'},
 {no:'BIA-260802-006',name:'资金结算业务影响分析',code:'BIZ-TREASURY',unit:'财务共享中心',group:'集团财务',plan:8,done:0,exception:0,due:'08-06',batch:'年度评估',status:'待评估',progress:24,priority:'正常'},
 {no:'DR-260731-015',name:'核心订单数据库切换演练',code:'SYS-ORDER-DB',unit:'信息技术部',group:'技术恢复组',plan:1,done:1,exception:0,due:'08-01',batch:'技术演练',status:'已关闭',progress:100,priority:'正常'},
 {no:'BCM-260801-024',name:'备用物流承运商启用',code:'SUP-LOG-ALT',unit:'供应链中心',group:'外部依赖组',plan:6,done:9,exception:3,due:'08-01',batch:'二级响应',status:'升级处理中',progress:55,priority:'加急'}]
export const resources=[{code:'KIT-EAST-01',name:'华东基地恢复资源包',unit:'华东运营基地',status:'可用',health:93,value:'18',valueUnit:'项',note:'备用工位与网络均已验证'},{code:'SITE-DR-02',name:'异地灾备中心',unit:'信息技术部',status:'待命',health:90,value:'12',valueUnit:'系统',note:'核心系统复制状态正常'},{code:'SUP-ALT-03',name:'替代供应商资源池',unit:'供应链中心',status:'预警',health:66,value:'7',valueUnit:'家',note:'两家承运商容量待确认'}]
export const reviews=[{no:'BIA-260801-032',title:'订单履约中断影响评估',type:'事件评估',detail:'影响 4 个区域 · 沈知',result:'待确认'},{no:'DR-260801-011',title:'订单数据库切换验证',type:'技术恢复',detail:'RTO 46 分钟 · 叶川',result:'通过'},{no:'BCP-260728-018',title:'替代承运商能力复核',type:'外部依赖',detail:'容量缺口 18%',result:'异常'}]
export const adminMetrics=[['恢复就绪评分','88.6','较上季度提升 2.3','blue'],['有效连续性预案','42','覆盖 36 项关键业务','green'],['待验证策略','8','3 项本月到期','orange'],['重大韧性风险','4','涉及外部供应链','red']]
export const fieldMetrics=[['响应任务','5','2 项高优先级','blue'],['已恢复业务','3','服务水平超过 60%','green'],['资源缺口','2','均已发起升级','orange'],['预案状态','有效','版本 V3.8','slate']]
export const chartActual=[71,74,77,79,82,84,86,87,89],chartTarget=[75,77,80,82,84,86,88,90,92]
export const loads=[['华东运营基地',92,'12 项能力已验证'],['信息技术部',88,'核心系统复制正常'],['全国服务中心',79,'异地坐席可用'],['供应链中心',64,'替代承运资源不足']]
export const issues=[{type:'供应',title:'备用承运商可用容量低于目标',detail:'缺口 18% · 影响订单履约',status:'升级中'},{type:'预案',title:'3 项关键业务预案即将到期',detail:'需在 8 月完成年度复审',status:'待复审'},{type:'演练',title:'财务结算切换演练未排期',detail:'RTO 目标 8 小时',status:'协调中'}]
