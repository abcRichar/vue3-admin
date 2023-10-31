<template>
  <div class="snInfo">
    <div class="info_top flex flex_bet flex_align">
      <div class="flex flex_bet flex_align">
        <div class="state" :class="online == 1 ? 'on_line' : 'off_line'">
          <i class="iconfont icondian3"></i> <span class="line_text">{{ online == 1 ? '设备在线' : '设备已离线' }}</span>
        </div>
        <span class="small">离线时间: {{ snInfoTabel.offline_time | newDate }}</span>
        <div class="mation mar_left small">定位：{{ snInfoTabel.location }}</div>
      </div>
      <div>
        <el-button size="mini" type="primary" @click="iconClick(snInfoTabel.sn)">刷新状态</el-button>
        <el-dropdown style="margin: 0 10px" @command="handleCommand" trigger="click">
          <el-button type="primary" size="mini"> 设备操作<i class="el-icon-arrow-down el-icon--right"></i> </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="1">设备重启</el-dropdown-item>
            <el-dropdown-item command="2">恢复出厂</el-dropdown-item>
            <!-- <el-dropdown-item command="3">内存优化</el-dropdown-item> -->
            <!-- <el-dropdown-item v-permission="['超级管理员', '管理员']" command="4">调整归属</el-dropdown-item> -->
            <!-- <el-dropdown-item v-permission="['超级管理员', '管理员']" command="5">切换账号类型</el-dropdown-item> -->
            <!-- <el-dropdown-item command="6">编辑设备信息</el-dropdown-item> -->
            <!-- <el-dropdown-item command="9">调整经销商</el-dropdown-item> -->
            <!-- <el-dropdown-item v-permission="['超级管理员', '管理员']" command="7">取消绑定</el-dropdown-item> -->
            <!-- <el-dropdown-item v-permission="['超级管理员', '管理员']" command="8">删除设备</el-dropdown-item> -->
          </el-dropdown-menu>
        </el-dropdown>
        <el-button size="mini" type="primary" @click="sninfoClose">关闭</el-button>
      </div>
    </div>

    <el-row class="ipad">
      <el-col :xs="24" :sm="12" :lg="8">
        <div class="ipad_box">
          <div class="ipad_header flex flex_align flex_bet">
            <div class="flex flex_align title_w"><i class="iconfont icongerenziliao mar_right font_weight_no" style="font-size: 20px"></i> 软件详情</div>
            <!-- <div class="flex flex_align">注册时间 {{ snInfoTabel.user_info && snInfoTabel.user_info.user_add_time | newDate }}</div> -->
            <div class="flex flex_align"><i :class="[snInfoTabel.is_lock ? 'off_line' : 'on_line', 'iconfont iconlock-full mar_right']" style="font-size: 14px"></i>{{ snInfoTabel.is_lock ? '已解锁' : '管控中' }}</div>
          </div>
          <ul>
            <li class="flex flex_align">
              <div class="border_left">姓名</div>
              <div class="table">{{ snInfoTabel.user_info && snInfoTabel.user_info.nickname ? snInfoTabel.user_info.nickname : '未设置' }}</div>
            </li>
            <li class="flex flex_align">
              <div class="border_left">设备归属号码</div>
              <div class="table">{{ snInfoTabel.user_info && snInfoTabel.user_info.mobile ? snInfoTabel.user_info.mobile : '未设置' }}</div>
            </li>
            <li class="flex flex_align">
              <div class="border_left">用户信息</div>
              <div class="flex flex_align flex_bet" style="width: 60%; padding-right: 10px">
                <div class="table" style="width: 75%">
                  {{ snInfoTabel.user_info && snInfoTabel.user_info.sex ? '男' : '女' }} - {{ snInfoTabel.user_info && snInfoTabel.user_info.school ? snInfoTabel.user_info.school : '厦门外国语学校' }} -
                  {{ snInfoTabel.user_info && snInfoTabel.user_info.grade ? snInfoTabel.user_info.grade : '七年级' }}
                </div>
              </div>
            </li>
            <li class="flex flex_align">
              <div class="border_left">激活信息</div>
              <div class="flex flex_align flex_bet" style="width: 60%; padding-right: 10px">
                <div class="table flex flex_align flex_bet" style="flex: 1">
                  <div>{{ snInfoTabel.code ? snInfoTabel.code : '-' }}</div>
                  <div>{{ snInfoTabel.activate_time | snDate }}</div>
                  <!-- <div>{{ snInfoTabel.user_info && snInfoTabel.user_info.credit ? snInfoTabel.user_info.credit : '0' }}分</div> -->
                </div>
              </div>
            </li>
            <li class="flex flex_align">
              <div class="border_left">设备版本号</div>
              <div class="table">
                {{ snInfoTabel.device_version && snInfoTabel.device_version != 0 ? `${snInfoTabel.device_version}` : '-' }}
                ({{ snInfoTabel.device_install_time | newDate }})
              </div>
              <!-- <div class="table">{{ snInfoTabel.user_info && snInfoTabel.user_info.credit_title }}</div> -->
            </li>
            <li class="flex flex_align">
              <div class="border_left">应用市场</div>
              <div class="table">
                {{ snInfoTabel.appstore_version && snInfoTabel.appstore_version != 0 ? `${snInfoTabel.appstore_version}` : '-' }}
                ({{ snInfoTabel.appstore_install_time | newDate }})
              </div>
              <!-- <div class="table">{{ snInfoTabel.user_info && snInfoTabel.user_info.user_type_name }}</div> -->
            </li>
            <li class="flex flex_align">
              <div class="border_left">桌面版本号</div>
              <div class="table">
                {{ snInfoTabel.desktop_version && snInfoTabel.desktop_version != 0 ? `${snInfoTabel.desktop_version}` : '-' }}
                ({{ snInfoTabel.desktop_install_time | newDate }})
              </div>
            </li>
            <li class="flex flex_align">
              <div class="border_left">浏览器版本号</div>
              <div class="table">
                {{ snInfoTabel.player_version && snInfoTabel.player_version != 0 ? `${snInfoTabel.player_version}` : '-' }}
                ({{ snInfoTabel.player_install_time | newDate }})
              </div>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="8">
        <div class="ipad_box">
          <div class="ipad_header flex flex_align flex_bet">
            <div class="flex flex_align title_w"><i class="iconfont iconcpuchuliqiyingjian mar_right font_weight_no" style="font-size: 20px"></i> 硬件详情</div>
          </div>
          <ul>
            <li class="flex flex_align">
              <div class="border_left">机型</div>
              <div class="flex flex_align flex_bet" style="width: 60%">
                <div class="table">{{ snInfoTabel.model }}</div>
                <!-- <div class="mar_right">{{ snInfoTabel.platform }}</div> -->
              </div>
            </li>
            <li class="flex flex_align">
              <div class="border_left">本机SN</div>
              <div class="table">{{ snData }}</div>
            </li>
            <li class="flex flex_align">
              <div class="border_left">IMEI</div>
              <div class="table">{{ snInfoTabel.imei }}</div>
            </li>
            <li class="flex flex_align">
              <div class="border_left">WIFI</div>
              <div class="flex flex_align flex_bet" style="width: 60%; padding-right: 10px">
                <div class="table flex flex_align flex_bet" style="flex: 1">
                  <div>{{ snInfoTabel.wifi_name ? snInfoTabel.wifi_name : '-' }}</div>
                  <div>{{ snInfoTabel.wifi_signal ? snInfoTabel.wifi_signal : '-' }}</div>
                </div>
              </div>
            </li>
            <li class="flex flex_align">
              <div class="border_left flex flex_bet">
                <div>电池状态</div>
                <div class="blue_txt" style="padding-right: 10px">{{ snInfoTabel.battery }}</div>
              </div>
              <div class="table">
                <div class="flex flex_align">
                  {{ snInfoTabel.battery ? snInfoTabel.battery + '%' : '' }}
                  <battery style="margin-left: 5px" :proQuantity="Number(snInfoTabel.battery)" />
                </div>
              </div>
            </li>
            <li class="flex flex_align">
              <div class="border_left">设备内存占用</div>
              <div class="table">{{ snInfoTabel.memory }}</div>
            </li>
            <li class="flex flex_align">
              <div class="border_left">存储占用剩余空间</div>
              <div class="table">{{ snInfoTabel.storage }}</div>
            </li>
            <li class="flex flex_align">
              <div class="border_left">ROM版本</div>
              <div class="flex flex_align flex_bet" style="width: 60%">
                <div class="table">{{ snInfoTabel.rom_version }}</div>
                <div class="mar_right">安卓系统：{{ snInfoTabel.system }}</div>
              </div>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="ipad_box" style="height: 410px">
          <div class="ipad_header flex flex_bet flex_align" style="padding-right: 10px">
            <div class="flex flex_align">
              <i class="iconfont iconpingmuquanping mar_right font_weight_no" style="font-size: 20px"></i>
              <div class="title_w">屏幕监控</div>
            </div>
            <div>
              <el-button size="mini" type="primary" :loading="photoLoading" @click="getqueryScreenshot(snInfoTabel)">刷新</el-button>
              <el-button size="mini" type="primary" @click.stop="getsendScreenshot(snInfoTabel)">截屏</el-button>
            </div>
          </div>
          <div class="swiper_img">
            <div v-if="printscreenSwiper.length == 0" style="height: 327px" class="flex flex_cen flex_align">
              <div class="apad_bg flex flex_cen flex_align" style="width: 397px; height: 260px; margin-top: 40px; color: #ffffff">暂无截图</div>
            </div>
            <el-carousel v-else height="327px" trigger="click" :autoplay="false" indicator-position="none">
              <el-carousel-item v-for="(item, index) in printscreenSwiper" :key="index">
                <h3 class="small">截图数量 ( {{ printscreenSwiper.length }} )</h3>
                <div class="screenshot_img">
                  <div class="screenshot_bg">
                    <img :src="item.img" @click="getImgIndex(index)" />
                  </div>
                </div>
                <h3 class="carusel_time">{{ item.create_time | newDate }}</h3>
              </el-carousel-item>
              <i class="iconfont iconshanchu1 delete_icon" style="" @click.stop="getdeleteScreenshot(snInfoTabel)"></i>
            </el-carousel>
            <!-- 图片预览 -->
            <img-viewer :visible.sync="showViewer" :initial-index="imageIndex" :url-list="previewSrcList"></img-viewer>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="ipad_fot">
      <!-- <el-col :xs="24" :sm="12" :lg="12">
        <TodayExercise :recentStudyData="recentStudyData" @getTabularErrorDetail="getTabularErrorDetail" />
      </el-col>
      <el-col :xs="24" :sm="12" :lg="12">
        <div class="ipad_fot_box" style="height: auto">
          <div class="ipad_fot_tit flex flex_align flex_bet">
            <div class="ipad_box_tit">学校成绩</div>
            <div class="chart_select" style="width: 20%">
              <el-select v-model="subject_chart_select" size="mini" placeholder="请选择" @change="changeSubjectChart">
                <el-option v-for="item in subjectList" :key="item.id" :label="item.name" :value="item.id"> </el-option>
              </el-select>
            </div>
          </div>
          <div class="ipad_box_content">
            <BrokenLineChart height="30vh" :chartData="chartData" />
          </div>
        </div>
      </el-col> -->
    </el-row>
    <el-row class="ipad">
      <el-col :xs="24" :sm="12" :lg="8">
        <div class="ipad_box" style="height: 300px" @click="appInstallShow = true">
          <div class="describe">应用管理</div>
          <div class="app_number">
            <span class="underline"> <count-to :start-val="0" :end-val="app_install.length" :duration="3800" class="card-panel-num" /> </span><span class="sdfd">个</span>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="8">
        <div class="ipad_box" style="height: 300px" @click="controlShow = true">
          <div class="describe">管控策略</div>
          <div class="app_number">
            <span class="underline"> <count-to :start-val="0" :end-val="controlSum" :duration="3800" class="card-panel-num" /> </span><span class="sdfd">条</span>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="ipad_box" style="height: 300px" @click="unfold">
          <div class="describe">数据统计</div>
          <div class="app_number">
            <span class="underline"> <count-to :start-val="0" :end-val="useappList.length" :duration="3800" class="card-panel-num" /> </span><span class="sdfd">个</span>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 调整账号类型 -->
    <el-dialog title="调整账号类型" :visible.sync="accountTypeDialog" v-el-drag-dialog="accountTypeDialog" width="30%" :close-on-click-modal="false" :close-on-press-escape="false">
      <div class="flex flex_align dialog_form">
        <div style="width: 100px; text-align: right">类型：</div>
        <el-radio-group v-model="accountType" style="width: 100%">
          <el-radio label="个人用户" :value="1"></el-radio>
          <el-radio label="企业用户" :value="2"></el-radio>
        </el-radio-group>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="accountTypeDialog = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="accountTypeDialog = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 切换归属 -->
    <el-dialog title="切换归属" :visible.sync="affiliationDialog" v-el-drag-dialog="affiliationDialog" width="30%" :close-on-click-modal="false" :close-on-press-escape="false">
      <div class="flex flex_align dialog_form">
        <div style="width: 100px; text-align: right">归属账号：</div>
        <el-select v-model="affiliationAccount" placeholder="请选择活动区域" style="width: 100%">
          <el-option label="17674179468" :value="1"></el-option>
          <el-option label="测试账号122" :value="2"></el-option>
        </el-select>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="affiliationDialog = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="affiliationDialog = false">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 错题详情弹窗 -->
    <!-- <ErrorDetailDialog :detailDialogVisible="detailDialogVisible" :uid="studentStatus.user_id" @closeDetailDialog="closeDetailDialog" /> -->

    <!-- 应用管理dialog -->
    <el-dialog :title="'数据统计' + ' ' + currentTime" :visible.sync="appUseRecord" v-el-drag-dialog="appUseRecord" class="app_dialog" width="40%">
      <el-tabs :tab-position="'top'">
        <el-tab-pane label="应用时段统计">
          <bolumnar-three lineColor="#f39800" :useTimeFrameChatrs="useTimeFrameChatrs" height="400px" />
        </el-tab-pane>
        <el-tab-pane label="应用时段记录">
          <div v-if="useTimeFrame.length == 0">
            <el-empty description="暂无数据"></el-empty>
          </div>
          <el-collapse accordion @change="collChange">
            <el-collapse-item v-for="(item, index) in useTimeFrame" :key="index" :name="index" v-show="item !== 0">
              <template slot="title">
                <div class="time_coll">
                  <div class="time_tit">{{ timeData[index] }}--{{ timeData[index + 1] }}</div>
                  <div class="time_num" style="font-weight: bold">使用时长{{ item | formatTime }}</div>
                </div>
              </template>
              <div v-if="currentUseAppList.length == 0">
                <el-empty description="暂无数据"></el-empty>
              </div>
              <div class="app_item" v-for="(item, i) in currentUseAppList" :key="i">
                <div class="app_item_left">
                  <div class="app_img">
                    <img :src="item.app_img" style="width: 100%; height: 100%" v-show="item.app_img" />
                    <img src="@/assets/images/app.png" style="width: 100%; height: 100%" v-show="!item.app_img" />
                  </div>
                  <div class="name">{{ item.app_name }}</div>
                </div>
                <div class="app_item_right">
                  {{ item.use_time | formatTime }}
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
        <el-tab-pane label="应用使用记录">
          <div v-if="useappList.length == 0">
            <el-empty description="暂无数据"></el-empty>
          </div>
          <div class="app_item" v-for="(item, i) in useappList" :key="i">
            <div class="app_item_left">
              <div class="app_img">
                <img :src="item.app_img" style="width: 100%; height: 100%" v-if="item.app_img" />
                <img src="@/assets/images/app.png" style="width: 100%; height: 100%" v-else />
              </div>
              <div class="name">{{ item.app_name }}</div>
            </div>
            <div class="app_item_right flex flex_bet" style="width: 40%">
              <div class="">时间段：{{ item.open_time | timeH }} - {{ item.close_time | timeH }}</div>
              <div style="margin-left: 10px">
                {{ item.use_time | formatTime }}
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>

    <!-- 应用管理dialog -->
    <el-dialog title="应用安装信息" :visible.sync="appInstallShow" v-el-drag-dialog="appInstallShow" class="app_dialog" width="55%">
      <div class="ipad_table">
        <el-table :data="app_install" style="width: 100%" border :default-sort="{ prop: 'create_time', order: 'descending' }">
          <el-table-column prop="date" label="应用" min-width="160" align="left">
            <template slot-scope="scope">
              <div class="flex flex_align">
                <div class="app-img"><img :src="scope.row.app_img | imgErr" alt="" /></div>
                <el-tooltip :content="scope.row.app_package" placement="top" effect="light">
                  <div>{{ scope.row.app_name }}</div>
                </el-tooltip>
                <i class="cobyOrderSn iconfont iconother_fuzhi" :data-clipboard-text="scope.row.app_package" @click="copy"></i>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="class_id" min-width="80" label="分类" align="center">
            <template slot-scope="scope">
              {{ scope.row.class_id == 1 ? '学习应用' : scope.row.class_id == 2 ? '娱乐应用' : scope.row.class_id == 3 ? '始终可用' : '始终可用' }}
            </template>
          </el-table-column>
          <el-table-column prop="name" label="运行状态" min-width="80" align="center">
            <template slot-scope="scope"><i class="iconfont icondian3" :class="scope.row.status ? 'on_line' : 'off_line'"></i></template>
          </el-table-column>
          <el-table-column prop="divide_version" min-width="140" label="分发版本" align="center"></el-table-column>
          <el-table-column prop="app_version_code" min-width="140" label="设备已安装版本" align="center">
            <template slot-scope="scope">{{ scope.row.app_version_name }}({{ scope.row.app_version_code }})</template>
          </el-table-column>
          <el-table-column prop="address" label="大小" min-width="140" align="center">
            <template slot-scope="scope">{{ scope.row.app_size | zhDate }}</template>
          </el-table-column>
          <el-table-column prop="create_time" min-width="140" label="安装时间" align="center" sortable>
            <template slot-scope="scope">{{ scope.row.install_time }}</template>
            <!-- <template slot-scope="scope">{{ scope.row.create_time | newDate }}</template> -->
          </el-table-column>
          <el-table-column label="操作" min-width="240" align="center">
            <template slot-scope="scope">
              <el-row>
                <el-button size="mini" @click.stop="getcleanInstallAppCache(scope.row)" circle class="iconfont iconqingchu"></el-button>
                <el-button size="mini" @click.stop="getforceStopApp(scope.row)" circle class="iconfont iconguanbi2"></el-button>
                <el-button size="mini" @click.stop="getuninstallApp(scope.row)" circle class="iconfont iconchangyonggoupiaorenshanchu"></el-button>
              </el-row>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-dialog>

    <!-- 管控策略dialog -->
    <el-dialog title="管控策略查询" :visible.sync="controlShow" v-el-drag-dialog="controlShow" class="app_dialog" width="30%">
      <el-tabs :tab-position="'top'">
        <el-tab-pane label="辅助控制">
          <div class="control_main" v-if="!isControlDetail">
            <div style="border: 1px solid #f2f2f2; border-radius: 10px">
              <div class="control_item flex flex_bet flex_align">
                <div class="flex flex_align">
                  <svg-icon icon-class="wxAppInstall" class-name="control_svg" />
                  <div class="control_name">
                    <div class="names flex flex_align" style="font-size: 16px; font-weight: bold">应用市场下载管控</div>
                    <div class="names_sub">{{ setTingControlList.is_storeinstall ? '允许' : '禁止' }}学生在应用市场自主下载</div>
                  </div>
                </div>
                <div class="control_switch">
                  <el-switch disabled v-model="setTingControlList.is_storeinstall" active-color="#4880ff" inactive-color="#dddddd" :active-value="1" :inactive-value="0"></el-switch>
                </div>
              </div>
              <div class="control_item flex flex_bet flex_align">
                <div class="flex flex_align">
                  <svg-icon icon-class="wxAppUse" class-name="control_svg" />
                  <div class="control_name">
                    <div class="names flex flex_align" style="font-size: 16px; font-weight: bold">第三方应用使用</div>
                    <div class="names_sub">{{ setTingControlList.setting_other_appInstaller ? '允许' : '禁止' }}学生使用第三方应用</div>
                  </div>
                </div>
                <div class="control_switch">
                  <el-switch disabled v-model="setTingControlList.setting_other_appInstaller" active-color="#4880ff" inactive-color="#dddddd" :active-value="1" :inactive-value="0"></el-switch>
                </div>
              </div>
              <div class="control_item flex flex_bet flex_align">
                <div class="flex flex_align">
                  <svg-icon icon-class="wxBrowser" class-name="control_svg" />
                  <div class="control_name">
                    <div class="names flex flex_align" style="font-size: 16px; font-weight: bold">浏览器输入开关</div>
                    <div class="names_sub">{{ setTingControlList.setting_browserInput ? '允许' : '禁止' }}学生使用浏览器输入</div>
                  </div>
                </div>
                <div class="control_switch">
                  <el-switch disabled v-model="setTingControlList.setting_browserInput" active-color="#4880ff" inactive-color="#dddddd" :active-value="1" :inactive-value="0"></el-switch>
                </div>
              </div>
              <div class="control_item flex flex_bet flex_align">
                <div class="flex flex_align">
                  <svg-icon icon-class="wxAndroid" class-name="control_svg" />
                  <div class="control_name">
                    <div class="names flex flex_align" style="font-size: 16px; font-weight: bold">切换安卓系统开关</div>
                    <div class="names_sub">{{ setTingControlList.is_return_android ? '允许' : '禁止' }}设备切换回安卓系统</div>
                  </div>
                </div>
                <div class="control_switch">
                  <el-switch disabled v-model="setTingControlList.is_return_android" active-color="#4880ff" inactive-color="#dddddd" :active-value="1" :inactive-value="0"></el-switch>
                </div>
              </div>
            </div>
            <div style="border: 1px solid #f2f2f2; border-radius: 10px; margin-top: 10px">
              <div class="control_item flex flex_bet flex_align">
                <div class="flex flex_align">
                  <svg-icon icon-class="wxNet" class-name="control_svg" />
                  <div class="names flex flex_align" style="font-size: 16px; font-weight: bold">绿色上网</div>
                </div>
                <div class="control_switch">
                  <el-button type="primary" size="mini" style="border-radius: 15px" @click="getIsControlDetail(2)">查看</el-button>
                </div>
              </div>
              <div class="control_item flex flex_bet flex_align">
                <div class="flex flex_align">
                  <svg-icon icon-class="wxLocation" class-name="control_svg" />
                  <div class="names flex flex_align" style="font-size: 16px; font-weight: bold">WIFI远程设置</div>
                </div>
                <div class="control_switch">
                  <el-button type="primary" size="mini" style="border-radius: 15px" @click="getIsControlDetail(1)">查看</el-button>
                </div>
              </div>
              <div class="control_item flex flex_bet flex_align">
                <div class="flex flex_align">
                  <svg-icon icon-class="wxLockPwd" class-name="control_svg" />
                  <div class="names flex flex_align" style="font-size: 16px; font-weight: bold">锁屏密码</div>
                </div>
                <div class="control_switch">
                  <el-button type="primary" size="mini" style="border-radius: 15px" @click="getIsControlDetail(3)">查看</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="control_item_detail" v-else>
            <el-button type="primary" size="mini" style="margin-bottom: 10px" @click="isControlDetail = false">返回</el-button>
            <div v-show="isControlTitle === 1">
              <div class="title">WIFI远程设置</div>
              <div v-if="wifiList.length == 0">
                <el-empty description="暂无数据"></el-empty>
              </div>
              <div class="detail_item" v-for="(item, i) in wifiList" :key="i">
                <div class="names">WIFI名称：{{ item.wifi_name }}</div>
                <div class="names">WIFI密码：{{ item.password }}</div>
              </div>
            </div>
            <div v-show="isControlTitle === 2">
              <div class="title">绿色上网</div>
              <div v-if="browserList.length == 0">
                <el-empty description="暂无数据"></el-empty>
              </div>
              <div class="detail_item" v-for="(item, i) in browserList" :key="i">
                <div class="names">{{ item.type == 2 ? '主页' : '书签' }}</div>
                <div class="names">地址：{{ item.address }}</div>
              </div>
            </div>
            <div v-show="isControlTitle === 3">
              <div class="title">锁屏密码</div>
              <!-- <div><el-empty description="暂无数据"></el-empty></div> -->
              <div class="detail_item flex flex_bet">
                <div class="names">当前锁屏密码</div>
                <div class="names">{{ snLockScreen.is_first ? '默认密码：0728' : snLockScreen.pwd }}</div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="其他控制">
          <div class="rest_control" v-if="!isRestControlDetail">
            <div class="flex flex_bet flex_align">
              <div class="control_item" style="width: 50%; margin-right: 20px" @click="getRestIsControlDetail(1)">
                <div class="control_names flex flex_align flex_bet">
                  <div class="names">专注模式</div>
                  <div class="control_tag" :class="[cloudLesson.is_lesson ? 'control_tag_on' : '']">{{ cloudLesson.is_lesson ? '开启' : '关闭' }}</div>
                </div>
                <div class="img"><img src="@/assets/wx/course.png" style="width: 80px; height: 80px" alt="" /></div>
              </div>
              <div class="control_item" style="width: 50%" @click="getRestIsControlDetail(2)">
                <div class="control_names flex flex_align flex_bet">
                  <div class="names">时间约定</div>
                  <div class="control_tag" :class="[setTingControlList.is_timecontrol ? 'control_tag_on' : '']">{{ setTingControlList.is_timecontrol ? '开启' : '关闭' }}</div>
                </div>
                <div class="img"><img src="@/assets/wx/tx.png" style="width: 80px; height: 80px" alt="" /></div>
              </div>
            </div>
          </div>
          <div class="rest_control_detail" v-else>
            <el-button type="primary" size="mini" style="margin-bottom: 10px" @click="isRestControlDetail = false">返回</el-button>
            <div v-show="isRestControlTitle === 1">
              <div class="title">专注模式</div>
              <!-- <div><el-empty description="暂无数据"></el-empty></div> -->
              <div class="detail_item flex flex_bet">
                <div class="names">专注模式开关</div>
                <div class="names"><el-switch disabled v-model="cloudLesson.is_lesson" active-color="#4880ff" inactive-color="#dddddd" :active-value="1" :inactive-value="0"></el-switch></div>
              </div>
              <div class="detail_item flex flex_bet">
                <div class="names">专注模式时间段</div>
                <div class="names">{{ cloudLesson.start_time ? cloudLesson.start_time + '-' + cloudLesson.end_time : '未设置' }}</div>
              </div>
              <div class="detail_item flex flex_bet">
                <div class="names">专注应用</div>
                <div class="names">{{ cloudLesson.app_name ? cloudLesson.app_name : '未设置' }}</div>
              </div>
            </div>
            <div v-show="isRestControlTitle === 2">
              <div class="title">时间约定</div>
              <!-- <div><el-empty description="暂无数据"></el-empty></div> -->
              <div class="detail_item flex flex_bet">
                <div class="names">时间控制开关</div>
                <div class="names"><el-switch disabled v-model="setTingControlList.is_timecontrol" active-color="#4880ff" inactive-color="#dddddd" :active-value="1" :inactive-value="0"></el-switch></div>
              </div>
              <div class="detail_item flex flex_bet">
                <div class="names">使用时间段</div>
                <div class="names">{{ setTingControlList.timecontrol_start ? setTingControlList.timecontrol_start + '-' + setTingControlList.timecontrol_end : '未设置' }}</div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<script>
// import { querySnHardware, singleDeviceRestartOrRecovery, sendScreenshot, queryScreenshot, forceStopApp, uninstallApp, deleteScreenshot, renovate, cleanInstallAppCache,} from "@/api/equipment.js";
// import { alarmClockList, appIconList, appGroundList, browserList, appManageList, settingList, timeControlList, wifiList, whiteAppList,appUseLog,getAppUseInterval,getMailList,getAppUseIntervalDetails,AlarmClockLately,getCloudLesson,getCloudLessonApp,getSnlockscreen} from "@/api/appreport.js";
import { getSnScreenshot, sendInstruct, getSnInfo, getAppInstallLog } from '@/api/snManage.js'
// import { studentStat, studentScoreStat, recentlyStudyLog } from '@/api/dashboard.js'
// import { getSubject } from '@/api/common.js'
import battery from '@/components/electric'
// import BolumnarThree from '@/views/dashboard/admin/components/BolumnarThree'
import imgViewer from '@/components/ImgPreview'
import permission from '@/directive/permission/index.js' // 权限判断指令
import Clipboard from 'clipboard' //复制功能
import CountTo from 'vue-count-to'
import '@/styles/snInfo.scss' //设备详情专用样式
export default {
  directives: { permission },
  components: { battery, imgViewer, CountTo },
  props: {
    online: {
      type: Number,
      default: 2
    },
    snData: {
      type: String,
      defaulte: ''
    },
    studentStatus: {
      type: Object,
      defaulte: {}
    }
  },
  computed: {
    onlineBtn() {
      return this.online == 1 ? false : true
    },
    controlSum() {
      let i = 0
      for (let item in this.allData) {
        if (this.allData[item].length) {
          i += 1
        }
      }
      return i
    },
    currentTime() {
      let d = new Date()
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
    }
  },
  data() {
    return {
      snInfoTabel: {}, //设备信息
      photoLoading: false,
      printscreenSwiper: [],
      app_install: [],
      showViewer: false,
      previewSrcList: [],
      imageIndex: 0,
      allData: new Array(10).fill([]),
      appInstallShow: false,
      controlShow: false,
      app_install_time: { application_time: 0, sn_time: 0, desktop_time: 0, browser_time: 0 },
      appUseRecord: false,
      useappList: [],
      useTimeFrameChatrs: {},
      currentUseTime: '10:00',
      currentUseAppList: [],
      value: false,
      setTingControlList: {},
      isControlDetail: false,
      isControlTitle: 1,
      isRestControlDetail: false,
      isRestControlTitle: 1,
      wifiList: [],
      clockList: [],
      browserList: [],
      recentlyClock: {},
      cloudLesson: {},
      snLockScreen: {},
      useTimeFrame: [],
      timeData: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
      chartData: { keyData: [], valueData: [] },
      subject_chart_select: 1,
      subjectList: [], //科目列表
      // studyData: {},
      recentStudyData: {},
      accountTypeDialog: false,
      affiliationDialog: false,
      accountType: '',
      affiliationAccount: '',
      detailDialogVisible: false
    }
  },
  created() {
    this.getSnInfo(this.snData)
    this.getAppInstallLog(this.snData)
    // this.getSubject()
    // this.getStudentStat(this.studentStatus.user_id);
    // this.getStudentScoreStat()
    // this.getRecentlyStudyLog(this.studentStatus.user_id)
    // this.getAppUseLog()
    // this.getquerySnHardware(this.snData)
    // this.getPromiseAll(this.snData)
    // this.getTimeFrame()
    // this.getSettingList(this.snData)
    // this.getAlarmClockLately(this.snData)
    // this.getCloudLesson(this.snData)
    // this.getSnlockscreen(this.snData)
  },
  mounted() {},
  methods: {
    unfold() {
      this.appUseRecord = true
      this.getAppUseLog()
    },
    // //获取学习数据
    // getStudentStat(user_id) {
    //   studentStat({ user_id: user_id })
    //     .then((res) => {
    //       this.studyData = res.data;
    //     })
    //     .catch((err) => {
    //       this.studyData = {};
    //     });
    // },
    getAppInstallLog(sn) {
      getAppInstallLog({ sn: sn })
        .then((res) => {
          this.app_install = res.data
        })
        .catch((err) => {
          this.app_install = []
        })
    },
    //获取最近学习记录
    getRecentlyStudyLog(user_id) {
      recentlyStudyLog({ user_id: user_id }).then((res) => [(this.recentStudyData = res.data)])
    },
    getSubject() {
      getSubject().then((res) => {
        this.subjectList = res.data.list
      })
    },
    collChange(e) {
      if (e === '') return
      this.getAppUseIntervalDetails(e)
    },
    changeSubjectChart(e) {
      this.subject_chart_select = e
      this.getStudentScoreStat()
    },
    //获取成绩
    getStudentScoreStat() {
      studentScoreStat({
        user_id: this.studentStatus.user_id,
        subject_id: this.subject_chart_select
      })
        .then((res) => {
          this.chartData.keyData = Object.keys(res.data)
          this.chartData.valueData = Object.values(res.data)
        })
        .catch((err) => {
          this.chartData.keyData = []
          this.chartData.valueData = []
        })
    },
    //应用时段记录
    getAppUseIntervalDetails(hour) {
      getAppUseIntervalDetails({ userId: localStorage.getItem('ID'), sn: this.snData, hour: hour })
        .then((res) => {
          console.log(res, '888')
          this.currentUseAppList = res.data
        })
        .catch((err) => {
          this.currentUseAppList = []
        })
    },
    getCurrentUseTime(e) {
      this.getAppUseIntervalDetails(e)
    },
    //应用使用时段
    getTimeFrame() {
      getAppUseInterval({ userId: localStorage.getItem('ID'), sn: this.snData }).then((res) => {
        let times = []
        for (let k of Object.values(res.data)) {
          // times.push(parseInt(Object.values(k)[0] / 60))
          times.push(parseInt(Object.values(k)[0]))
        }
        this.useTimeFrameChatrs = {
          expectedData: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
          keysdData: times
        }
        // this.useTimeFrame = [6,31,33,13,0,65,36,71,133,0,34,35,36,31,33,13,34,66,24,35,26,44,36,40]
        this.useTimeFrame = times
        console.log(times, 'getAppUseInterval时段')
        let totalNum = 0
        this.useTimeFrame.forEach((item) => {
          if (item == 0) {
            totalNum++
          }
        })
        if (this.useTimeFrame.length == totalNum) return (this.useTimeFrame = [])
      })
    },
    getAppUseLog() {
      appUseLog({ sn: this.snData })
        .then((res) => {
          res.data.forEach((item) => {
            item.use_time = item.close_time - item.open_time
          })
          // this.useappList.keysdData = res.data.map(item => item.app_name)
          // this.useappList.expectedData = res.data.map(item => this.transitionTime(item.use_time)).sort((a,b) => b-a)
          this.useappList = res.data
          console.log('应用使用时长', this.useappList)
        })
        .catch((err) => {
          this.useappList = []
        })
    },
    transitionTime(value) {
      const round = (n, d) => Number(Math.round(n + 'e' + d) + 'e-' + d)
      return round(parseInt(value / 60), 1)
    },
    //查看错题详情
    getTabularErrorDetail() {
      this.detailDialogVisible = true
    },
    //关闭子组件
    closeDetailDialog(val) {
      this.detailDialogVisible = val
    },
    //复制事件
    copy() {
      var clipboard = new Clipboard('.cobyOrderSn')
      clipboard.on('success', (e) => {
        this.$message('复制成功')
        clipboard.destroy() // 释放内存
      })
      clipboard.on('error', (e) => {
        this.$message.error('该浏览器不支持请手动复制')
        clipboard.destroy()
      })
    },
    getImgIndex(index) {
      this.imageIndex = index
      this.showViewer = true
    },
    closeViewer() {
      this.showViewer = false
    },
    handleCommand(command) {
      switch (command) {
        case '1':
          this.getSnRestart()
          // this.$listeners.getsingleDeviceRestartOrRecovery(this.snInfoTabel.sn, 1);
          break
        case '2':
          this.getFactoryReset()
          // this.$listeners.getsingleDeviceRestartOrRecovery(this.snInfoTabel.sn, 2);
          break
        case '3':
          this.$listeners.getsendOrder(this.snInfoTabel.sn, 1)
          break
        case '4':
          // this.$listeners.adjustUser('user', this.snInfoTabel.id);
          this.affiliationDialog = true
          break
        case '5':
          this.accountTypeDialog = true

          // this.$listeners.getdialogConvert(this.snInfoTabel.id, this.snInfoTabel.type);
          break
        case '6':
          this.$listeners.batchAndInfo('info', this.snInfoTabel)
          break
        case '7':
          this.$listeners.getadminRelieveBindSn(this.studentStatus)
          break
        case '8':
          this.$listeners.getdeleteSn(this.snInfoTabel.id)
          break
        case '9':
          this.$listeners.getsnDealerUpdate(this.studentStatus)
          break
      }
    },
    // accountTypeDialogClose(){},
    // affiliationDialogClose(){},
    //设备信息刷新
    iconClick(sn) {
      this.imgRotate = !this.imgRotate
      let qs = { sn: this.snData, userId: localStorage.getItem('ID') }
      this.$emit('initWebSocket')
      this.getSnInfo(this.snData)
      // renovate(qs).then(res => {
      //   this.getSnInfo(this.snData)
      //   this.getquerySnHardware(this.snData)
      //   this.getPromiseAll(this.snData)
      //   this.getSettingList(this.snData)
      //   this.getAlarmClockLately(this.snData)
      //   this.getCloudLesson(this.snData)
      //   this.getSnlockscreen(this.snData)
      //   this.$message({ message: res.msg, type: 'success', customClass: 'mzindex' })
      // }).catch(err => { })
    },
    //旧
    // getquerySnHardware(sn) {
    //   querySnHardware({ sn: sn }).then(res => {
    //     this.snInfoTabel = res.data
    //     this.app_install = res.data.app
    //     console.log('--------1', res.data)
    //     this.getqueryScreenshot(res.data)
    //   }).catch(err => {
    //     this.snInfoTabel = []
    //   })
    // },
    getSnInfo(sn) {
      getSnInfo({ sn: sn })
        .then((res) => {
          console.log(res, '1111')
          this.snInfoTabel = res.data
          this.getqueryScreenshot()
        })
        .catch((err) => {
          this.snInfoTabel = {}
        })
    },
    //SN恢复出厂设置
    // getsingleDeviceRestartOrRecovery(sn, type) {
    //   let qs = { sn: sn, type: type, userId: localStorage.getItem('ID'), lastIp: localStorage.getItem('Ip') };
    //   let txt = type == 1 ? '是否要重启?' : '是否要恢复出厂设置?';
    //   this.$confirm(txt, '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning',
    //     customClass: 'mzindex'
    //   })
    //     .then(() => {
    //       singleDeviceRestartOrRecovery(qs)
    //         .then((res) => {
    //           this.$message({ message: res.msg, type: 'success', customClass: 'mzindex' });
    //         })
    //         .catch((err) => {});
    //     })
    //     .catch(() => {});
    // },
    //查看截图信息
    async getqueryScreenshot(item) {
      let qs = { sn: this.snData }
      this.photoLoading = true
      await getSnScreenshot(qs)
        .then((res) => {
          //取消图片弹窗
          res.data.list.forEach(async (item) => {
            this.$set(item, 'imgSize', await this.getImgSize(item.img))
          })
          res.data.list = res.data.list.sort((a, b) => b.create_time - a.create_time)
          this.printscreenSwiper = res.data.list
          this.previewSrcList = res.data.list.map((item) => item.img)
          this.photoLoading = false
        })
        .catch((err) => {
          this.photoLoading = false
          this.printscreenSwiper = []
        })
    },
    // 获取图片尺寸
    getImgSize(url) {
      return new Promise((resolve, reject) => {
        let imgObj = new Image()
        imgObj.src = url
        imgObj.onload = () => {
          resolve({ width: imgObj.width, height: imgObj.height })
        }
      })
    },
    //截图
    getsendScreenshot(item) {
      console.log(item, '999')
      let text = this.onlineBtn ? '设备离线无法进行截屏' : '是否要发送截图指令?'
      let qs = { userId: localStorage.getItem('ID'), lastIp: localStorage.getItem('Ip'), sn: this.snData, type: 2 }
      this.$confirm(text, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        customClass: 'mzindex'
      })
        .then((res) => {
          if (!this.onlineBtn) {
            sendInstruct(qs).then((res) => {
              this.$message({ message: '截屏指令发送成功', type: 'success', customClass: 'mzindex' })
            })
          }
        })
        .catch((err) => {})
    },
    //删除截图信息
    getdeleteScreenshot(item) {
      let qs = { sn: item.sn }
      this.$confirm('是否要清除所有截图信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        customClass: 'mzindex'
      })
        .then((res) => {
          deleteAllSnScreenshot(qs).then((res) => {
            this.printscreenSwiper = []
            this.$message({ message: res.msg, type: 'success', customClass: 'mzindex' })
          })
        })
        .catch((err) => {})
    },
    //设备重启
    getSnRestart() {
      let qs = { sn: this.snData, userId: localStorage.getItem('ID'), type: 5 }
      this.$confirm('是否要设备重启?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        customClass: 'mzindex'
      })
        .then((res) => {
          sendInstruct(qs)
            .then((res) => {
              this.$message({ message: res.msg, type: 'success', customClass: 'mzindex' })
              this.getquerySnHardware(this.snData)
            })
            .catch((err) => {})
        })
        .catch((err) => {})
    },
    //恢复出厂设置
    getFactoryReset() {
      let qs = { sn: this.snData, userId: localStorage.getItem('ID'), type: 8 }
      this.$confirm('是否要恢复出厂设置?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        customClass: 'mzindex'
      })
        .then((res) => {
          sendInstruct(qs)
            .then((res) => {
              this.$message({ message: res.msg, type: 'success', customClass: 'mzindex' })
              this.getquerySnHardware(this.snData)
            })
            .catch((err) => {})
        })
        .catch((err) => {})
    },
    //SN卸载应用
    getuninstallApp(item) {
      console.log(item)
      let qs = { sn: this.snData, id: item.id, userId: localStorage.getItem('ID'), app_package: item.app_package }
      this.$confirm('是否要卸载设备应用?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        customClass: 'mzindex'
      })
        .then((res) => {
          uninstallApp(qs)
            .then((res) => {
              this.$message({ message: res.msg, type: 'success', customClass: 'mzindex' })
              this.getquerySnHardware(this.snData)
            })
            .catch((err) => {})
        })
        .catch((err) => {})
    },
    //强制停用设备应用
    getforceStopApp(item) {
      let qs = { sn: this.snData, id: item.id, userId: localStorage.getItem('ID'), app_package: item.app_package }
      this.$confirm('是否要强制停用设备应用?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        customClass: 'mzindex'
      })
        .then((res) => {
          forceStopApp(qs)
            .then((res) => {
              this.$message({ message: res.msg, type: 'success', customClass: 'mzindex' })
              this.getquerySnHardware(this.snData)
            })
            .catch((err) => {})
        })
        .catch((err) => {})
    },
    getcleanInstallAppCache(item) {
      let qs = { id: item.id, userId: localStorage.getItem('ID'), sn: this.snData, app_package: item.app_package }
      this.$confirm('是否要清除应用缓存?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        customClass: 'mzindex'
      })
        .then((res) => {
          cleanInstallAppCache(qs)
            .then((res) => {
              this.$message({ message: res.msg, type: 'success', customClass: 'mzindex' })
              this.getquerySnHardware(this.snData)
            })
            .catch((err) => {})
        })
        .catch((err) => {})
    },
    sninfoClose() {
      this.$emit('sninfoClose')
    },
    getSettingList(sn) {
      settingList({ sn: sn })
        .then((res) => {
          this.setTingControlList = res.data[0]
        })
        .catch((err) => {
          this.setTingControlList = {}
        })
    },
    getAlarmClockLately(sn) {
      AlarmClockLately({ sn: sn })
        .then((res) => {
          this.recentlyClock = res.data
        })
        .catch((err) => {
          this.recentlyClock = {}
        })
    },
    getCloudLesson(sn) {
      getCloudLesson({ sn: sn })
        .then((res) => {
          this.cloudLesson = res.data
        })
        .catch((err) => {
          this.cloudLesson = {}
        })
    },
    getSnlockscreen(sn) {
      getSnlockscreen({ sn: sn })
        .then((res) => {
          this.snLockScreen = res.data
        })
        .catch((err) => {
          this.snLockScreen = {}
        })
    },
    //管控所有请求
    getPromiseAll(sn) {
      let params = { sn: sn }
      //远程闹钟列表
      let p1 = alarmClockList(params)
      //图标隐藏列表
      let p2 = appIconList(params)
      //应用内部网页跳转列表
      let p3 = appGroundList(params)
      //浏览器上网列表
      let p4 = browserList(params)
      // //应用管理列表
      let p5 = appManageList(params)
      // //系统及影音设置列表
      let p6 = settingList(params)
      //平板使用时间列表
      let p7 = timeControlList(params)
      //wifi列表
      let p8 = wifiList(params)
      //应用白名单列表
      let p9 = whiteAppList(params)
      Promise.allSettled([p1, p2, p3, p4, p5, p6, p7, p8, p9]).then((res) => {
        this.allData = res.map((item) => (item.status == 'fulfilled' ? item.value.data : []))
        this.wifiList = this.allData[7]
        this.browserList = this.allData[3]
        this.clockList = this.allData[0]
      })
    },
    //进入详情
    getIsControlDetail(type) {
      this.isControlDetail = true
      this.isControlTitle = type
    },
    getRestIsControlDetail(type) {
      this.isRestControlDetail = true
      this.isRestControlTitle = type
    }
  }
}
</script>

<style scoped>
/deep/.el-carousel__item:nth-child(2n + 1) {
  background-color: #fff !important;
}
/deep/.el-collapse-item__content {
  background-color: #fff;
}

/deep/.el-table__empty-block {
  background-color: #f9f9f9;
}
/deep/.el-collapse-item__header {
  line-height: normal;
  background: #fff !important;
}
/deep/.el-collapse-item {
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
}
/deep/.el-collapse {
  border: none;
}
</style>

<style lang="scss" scoped>
.center {
  padding: 0 !important;
}
</style>