<template>
    <div>
        <!--    展示轮播图-->
        <div class="lunBo" ref="element">
<!--            <img src="http://images.gshxkj.com.cn:8090/aboutHX/about_bg.png" alt="">-->
        </div>

        <div class="content">
            <el-row>
                <el-col :span="7">
                    <span style="opacity: 0">123</span>
                    <ul class="left" id="div3" style="margin-top: -15px;z-index: 2;">
                        <div>
                            加入环讯
                        </div>
<!--                        <li @click="tab(1,'人文关怀')" :class="index==1?'active1':''"><span>人文关怀</span> <i :class="index==1?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i> </li>-->
                        <li @click="tab(2,'社会招聘')" :class="index==2?'active1':''"><span>社会招聘</span> <i :class="index==2?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i></li>
<!--                        <li @click="tab(3,'校园招聘')" :class="index==3?'active1':''"><span>校园招聘</span> <i :class="index==3?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i></li>-->
<!--                        <li @click="tab(4,'实习生招聘')" :class="index==4?'active1':''"><span>实习生招聘</span> <i :class="index==4?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i></li>-->
                        <li @click="tab(1,'环讯生活')" :class="index==1?'active1':''"><span>环讯生活</span> <i :class="index==1?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i></li>

                    </ul>
                </el-col>
                <el-col :span="17">
                    <el-row type="flex" align="middle" style="margin-bottom: 40px;" v-show="index!=0">
                        <el-col :sm="12">
                            <span class="title"><img src="http://images.gshxkj.com.cn:8090/aboutHX/icon11.png" alt="">{{msg}}</span>
                        </el-col>
                        <el-col :sm="12">
                            <p class="title_right">当前位置：首页 > 加入环讯 > {{msg}}</p>
                        </el-col>
                    </el-row>

                    <div class="main1" v-show="index==0" style="min-height: 600px;">
                        <p style="margin-top: 30px;"> 我们倡导团队协作，公平公正，领导员工与企业共成长的企业文化，鼓励创新，致力于为员工创造充分展示自我才智，发挥潜能的舞台。除了为员工提供极具竞争力的福利待遇外，公司还建立了一整队与员工的职业生涯发展相结合的合理晋升体系，针对不同特点的员工设置不同的晋升通道，专业技能优秀的员工晋升以绩效考核结果为基础，同时又作为薪酬调整的依据。公司内部空缺职位优先考虑内部竞聘人员，为员工提供广泛的发展空间，努力做到公司与员工一起成长。</p>

                    </div>
                    <!--                        人文关怀-->
                    <div class="main1" v-show="index==1">
                        <h2>员工福利</h2>
                        <p>公司薪酬福利体系的建立着眼于环讯科技未来长期战略发展。薪酬水平定位于市场相对较高水平，公司通过建立合理的薪酬结构、规范的薪资标准与动态薪酬调整机制，确保薪酬的外部竞争性与内部公平性。同时，公司重视人文关怀，建立了完善的福利制度，不但为员工提供国家法定福利，并且结合公司实际情况，制定并实施个性化的福利政策，形成员工基本生活有力补充，也带动了工作的积极性。</p>

                        <div class="ygfl">
                            <div>
                                <span style="transform: rotate(-30deg);"></span>
                                <div>
                                    <img src="http://images.gshxkj.com.cn/addHX/icon14.png" alt="">
                                </div>
                                <p>充分的基本保障</p>
                            </div>
                            <div style="position: relative;top: -70px;">
                                <span style="transform: rotate(30deg);top: 70px;"></span>
                                <div>
                                    <img src="http://images.gshxkj.com.cn/addHX/icon15.png" alt="">
                                </div>
                                <p>员工关怀</p>
                            </div>
                            <div>
                                <span style="transform: rotate(-30deg);"></span>
                                <div>
                                    <img src="http://images.gshxkj.com.cn/addHX/icon16.png" alt="">
                                </div>
                                <p>带薪假期</p>
                            </div>
                            <div style="position: relative;top: -70px;">
                                <span style="transform: rotate(30deg);top: 70px;"></span>
                                <div>
                                    <img src="http://images.gshxkj.com.cn/addHX/icon17.png" alt="">
                                </div>
                                <p>各类补助</p>
                            </div>
                            <div>
                                <div>
                                    <img src="http://images.gshxkj.com.cn/addHX/icon18.png" alt="">
                                </div>
                                <p>健康关怀</p>
                            </div>
                        </div>
                        <h2>员工发展</h2>
                        <el-row class="ygfz" :gutter="20" type="flex" style="flex-wrap: wrap;">
                            <el-col :sm="12">
                                <img src="http://images.gshxkj.com.cn/addHX/jion_pic1.png" alt="">
                                <div class="ygfz_bottom">
                                    <h3>【完善的培训体系】</h3>
                                    <p>涵盖了不同群体的不同培训项目，新员工培养、在职员工培养、新任经理培养、梯队人才培养、业务领军人才培养等，帮助员工职业生涯的规划与发展。</p>
                                </div>
                            </el-col>
                            <el-col :sm="12">
                                <img src="http://images.gshxkj.com.cn/addHX/jion_pic2.png" alt="">
                                <div class="ygfz_bottom">
                                    <h3>【融洽的工作氛围】</h3>
                                    <p>团结互助的同事关系、自由和谐的工作环境，人性化的管理，弹性的工作时间，能让员工快速融入并为之奋斗。</p>
                                </div>
                            </el-col>

                            <el-col :sm="12">

                                <img src="http://images.gshxkj.com.cn/addHX/jion_pic3.png" alt="">
                                <div class="ygfz_bottom">
                                    <h3>【良好的沟通与诉求机制】</h3>
                                    <p>公平、公正、公开的沟通环境，公司拥有自己的内网、微信群和公众号，有效满足员工意愿的表达。</p>
                                </div>
                            </el-col>
                            <el-col :sm="12">
                                <img src="http://images.gshxkj.com.cn/addHX/jion_pic4.png" alt="">
                                <div class="ygfz_bottom">
                                    <h3>【公平透明的职业发展通道】</h3>
                                    <p>关注员工的职业发展，公司设计了专业和管理双通道发展体系，使得从事不同工作的员工可以根据工作需要、能力、兴趣和意愿，在个人职业发展上有可持续发展的职业空间。</p>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <!--                        社会招聘-->
                    <div class="main2" v-show="index==2">
                       <div class="main2_content">
                           <div class="main2_left">
                               <img src="http://images.gshxkj.com.cn/addHX/6.png" >
                           </div>
                           <div class="main2_right">
                               <h2><span>人才理念</span></h2>
                               <p>环讯科技始终坚持以人为本的人才发展理念，视人才为公司发展的核心竞争力，以人力资本为公司发展的首要资本，将员工的成长和企业的发展放在同等重要的位置。</p>
                           </div>
                       </div>
                        <div class="fenge"></div>
                        <el-collapse v-model="activeName1" >
                            <el-collapse-item title="● 初级java工程师" name="1">
                                <div class="fenQing">
                                    <h3>职位信息</h3>
                                    <p>1.在客户现场从事银行中间业务等系统的开发。</p>
                                    <p>2.执行并完成项目组长（或项目经理）的相关任务安排，并主动定期汇报。</p>
                                    <p>3.完成相关模块的分析、设计、开发、测试、维护的工作。</p>
                                    <h3>职位要求</h3>
                                    <p>1.统招本科，二本及以上，计算机相关专业。理解领会力强、敬业工作积极主动、细心认真、严谨，很强的责任心和团队精神。可稳定在兰州工作优先。</p>
                                    <p>2.Java方向，从事银行中间业务、柜面、渠道等系统的开发设计工作。</p>
                                    <p>3.熟悉Spring、Struts、Radis、Dubbo、SpringCloud者可以优先。</p>
                                    <p>4.熟悉Oracle、MySQL、PostgreSQL任意一种数据库。</p>
                                    <p>5.有银行系统开发经验者优先。</p>
                                    <p>欢迎专业方向一致的人才投递简历，有意者请发送简历(中或英文简历 含照片)，同时可附个人发表文章、专利或能代表个人能力的作品。</p>
                                    <p>附件标题 格式请用：初级java工程师-姓名-学校-专业-学历-到岗时间。期待您的加入！</p>
                                    <p>联系人：赵先生</p>
                                    <p>邮箱：huanxunkeji@gshxkj.com.cn</p>
                                    <button>投递简历</button>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="● java工程师" name="2">
                                <div class="fenQing">
                                    <h3>职位信息</h3>
                                    <p>1.从事银行管理信息类系统的开发、测试、部署、运行保障等工作。</p>
                                    <p>2.参与系统的需求调研和需求分析，撰写相关技术文档。</p>
                                    <p>3.搭建系统开发环境，完成系统框架和核心代码的实现。</p>
                                    <p>4.项目概要设计，详细设计。开发计划等的编制并实施。</p>
                                    <p>5.参与代码审核与版本管理。</p>
                                    <h3>职位要求</h3>
                                    <p>1.2年以上Java项目系统分析设计、开发经验，良好的面向对象编程思想，对其中的设计原则有很好的理解和运用。</p>
                                    <p>2.精通Spring、Hibernate、struts、mybatis等开源框架,熟练掌握JSON、JQuery、XMl、HTML5。</p>
                                    <p>3.熟悉Linux操作系统，熟练weblogic 、tomcat等主流服务器。</p>
                                    <p>4.熟练使用Oracle或者mysql数据库。</p>
                                    <p>5.良好的沟通、团队协作能力，责任心强,思路清晰,性格稳定,能够承受工作压力。</p>
                                    <p>6.统招本科，二本及以上，计算机相关专业。有金融行业背景优先，可稳定在兰州工作优先。</p>
                                    <p>欢迎专业方向一致的人才投递简历，有意者请发送简历(中或英文简历 含照片)，同时可附个人发表文章、专利或能代表个人能力的作品。</p>
                                    <p>附件标题 格式请用： java工程师-姓名-学校-专业-学历-到岗时间。期待您的加入！</p>
                                    <p>联系人：赵先生</p>
                                    <p>邮箱：huanxunkeji@gshxkj.com.cn</p>
                                    <button>投递简历</button>
                                </div>
                            </el-collapse-item>
<!--                            <el-collapse-item title="● 初级C开发工程师" name="3">-->
<!--                                <div class="fenQing">-->
<!--                                    <h3>职位信息</h3>-->
<!--                                    <p>1.在客户现场从事银行中间业务等系统的开发。</p>-->
<!--                                    <p>2.执行并完成项目组长（或项目经理）的相关任务安排，并主动定期汇报。</p>-->
<!--                                    <p>3.完成相关模块的分析、设计、开发、测试、维护的工作。</p>-->
<!--                                    <h3>职位要求</h3>-->
<!--                                    <p>1. 全日制院校本科毕业。可稳定在兰州工作者优先。</p>-->
<!--                                    <p>2. 熟悉unix/linux操作系统，熟悉使用shell脚本。</p>-->
<!--                                    <p>3. 能熟练使用SQL语句进行数据库操作，熟悉ORACLE、DB2、INFORMIX数据库不少于一种。</p>-->
<!--                                    <p>4. 具备一定的C/C++的编程能力，能开发数据库操作的程序或者网络通讯程序，有相关项目经验。</p>-->
<!--                                    <p>欢迎专业方向一致的人才投递简历，有意者请发送简历(中或英文简历 含照片)，同时可附个人发表文章、专利或能代表个人能力的作品。</p>-->
<!--                                    <p>附件标题 格式请用：初级C开发工程师-姓名-学校-专业-学历-到岗时间。期待您的加入！</p>-->
<!--                                    <p>联系人：赵先生</p>-->
<!--                                    <p>邮箱：huanxunkeji@gshxkj.com.cn</p>-->
<!--                                    <button>投递简历</button>-->
<!--                                </div>-->
<!--                            </el-collapse-item>-->
<!--                            <el-collapse-item title="● 中级C开发工程师" name="4">-->
<!--                                <div class="fenQing">-->
<!--                                    <h3>职位信息</h3>-->
<!--                                    <p>1.在客户现场从事银行中间业务、银联前置、ATM渠道、POS渠道等系统的开发。</p>-->
<!--                                    <p>2.执行并完成项目组长(或项目经理)的相关任务安排，并主动定期汇报。</p>-->
<!--                                    <p>3.完成相关模块的分析、设计、开发测试，维护的工作。</p>-->
<!--                                    <p>4.协助编写和评审各类项目相关的技术(或业务)文档。</p>-->
<!--                                    <h3>职位要求</h3>-->
<!--                                    <p>1.全日制院校本科毕业，工作时间不少于2年。可稳定在兰州工作者优先。</p>-->
<!--                                    <p>2.对unix/linux操作系统了解较为全面，能熟练操作和使用UNIX类的操作系统。熟练使用shell, 可编写shell脚本。</p>-->
<!--                                    <p>3.熟悉Oracle, DB2、 MySQL SqlServer任意- 种数据库;</p>-->
<!--                                    <p>4.具备较强的C/C+ +的编程能力，能开发数据库操作的程序或者网络通讯程序，有相关项目经验。</p>-->
<!--                                    <p>欢迎专业方向一致的人才投递简历，有意者请发送简历(中或英文简历 含照片)，同时可附个人发表文章、专利或能代表个人能力的作品。</p>-->
<!--                                    <p>附件标题 格式请用： 中级C开发工程师-姓名-学校-专业-学历-到岗时间。期待您的加入！</p>-->
<!--                                    <p>联系人：赵先生</p>-->
<!--                                    <p>邮箱：huanxunkeji@gshxkj.com.cn</p>-->
<!--                                    <button>投递简历</button>-->
<!--                                </div>-->
<!--                            </el-collapse-item>-->
<!--                            <el-collapse-item title="● Web前端开发工程师" name="5">-->
<!--                                <div class="fenQing">-->
<!--                                    <h3>职位信息</h3>-->
<!--                                    <p>1.负责公司各业务平台相关的业务产品前端开发，维护和优化工作。</p>-->
<!--                                    <p>2.负责前端框架的搭建，公共组建的开发和维护。</p>-->
<!--                                    <p>3.配合后台开发人员完成管理后台前端模式的开发。</p>-->
<!--                                    <p>4.参与技术需求讨论。</p>-->
<!--                                    <p>5.参与或负责Web端技术框架的持续优化。</p>-->
<!--                                    <h3>职位要求</h3>-->
<!--                                    <p>1.能够熟练运用HTML、CSS、javascript 构建高性能的web应用程序。</p>-->
<!--                                    <p>2.熟悉原生javascript,熟悉使用react+redux +antd等框架及类库。</p>-->
<!--                                    <p>3.理解web标准和兼容性，对可用性相关知识有实际的了解和实践经验。</p>-->
<!--                                    <p>4.了解nodejs,对算法、数据结构以及后台开发有一一定了解。</p>-->
<!--                                    <p>5.熟悉常用WEB开发调试工具，有使用gulp、webpack等 工具进行前端工程化经验。</p>-->
<!--                                    <p>6.具有良好的逻辑思维及语言表达能沟通力，要能高效配合团队成员，共同完成项目。</p>-->
<!--                                    <p>7.有工作态度端正，能够积极主动去工作，高效推动项目完成。</p>-->
<!--                                    <p>欢迎专业方向一致的人才投递简历，有意者请发送简历(中或英文简历 含照片)，同时可附个人发表文章、专利或能代表个人能力的作品。</p>-->
<!--                                    <p>附件标题 格式请用：Web前端开发工程师-姓名-学校-专业-学历-到岗时间。期待您的加入！</p>-->
<!--                                    <p>联系人：赵先生</p>-->
<!--                                    <p>邮箱：huanxunkeji@gshxkj.com.cn</p>-->
<!--                                    <button>投递简历</button>-->
<!--                                </div>-->
<!--                            </el-collapse-item>-->
                            <el-collapse-item title="● 初级测试工程师" name="6">
                                <div class="fenQing">
                                    <h3>职位信息</h3>
                                    <p>1.测试相关文档编写。</p>
                                    <p>2.测试案例的设计及编写。</p>
                                    <p>3.完成测试任务，并跟进测试缺陷状态。</p>
                                    <h3>职位要求</h3>
                                    <p>1.国家统招本科及以上学历，1年以上计算机软件相关专业。</p>
                                    <p>2.具有金融业测试经验优先。</p>
                                    <p>3.熟软件工程和测试理论，编写测试计划、测试用例。</p>
                                    <p>4.良好的沟通及学习能力。</p>
                                    <p>5.熟练使用OFFICE办公软件。</p>
                                    <p>6.能够按时完成组长安排的工作任务。</p>
                                    <p>欢迎专业方向一致的人才投递简历，有意者请发送简历(中或英文简历 含照片)，同时可附个人发表文章、专利或能代表个人能力的作品。</p>
                                    <p>附件标题 格式请用：初级测试工程师-姓名-学校-专业-学历-到岗时间。期待您的加入！</p>
                                    <p>联系人：赵先生</p>
                                    <p>邮箱：huanxunkeji@gshxkj.com.cn</p>
                                    <button>投递简历</button>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="● 中级测试工程师" name="7">
                                <div class="fenQing">
                                    <h3>职位信息</h3>
                                    <p>1.测试方案制定，设计和编写测试数据和测试用例。</p>
                                    <p>2.测试报告相关文档编写。</p>
                                    <p>3.测试执行，对测试问题跟踪，协助开发修复。</p>
                                    <p>4.提高测试效率，为软件质量负责。</p>
                                    <h3>职位要求</h3>
                                    <p>1.国家统招本科及以上学历，3年以上系统测试从业经验。</p>
                                    <p>2.具有银行业务测试经验优先。</p>
                                    <p>3.有独立分析需求编写案例的能力。</p>
                                    <p>4.熟悉软件工程和测试理论、测试需求分析，用例设计方法。</p>
                                    <p>5.良好的组织协调、沟通及学习能力。</p>
                                    <p>6.熟练使用OFFICE办公软件,熟悉测试工具以及缺陷管理工具使用。</p>
                                    <p>欢迎专业方向一致的人才投递简历，有意者请发送简历(中或英文简历 含照片)，同时可附个人发表文章、专利或能代表个人能力的作品。</p>
                                    <p>附件标题 格式请用：中级测试工程师-姓名-学校-专业-学历-到岗时间。期待您的加入！</p>
                                    <p>联系人：赵先生</p>
                                    <p>邮箱：huanxunkeji@gshxkj.com.cn</p>
                                    <button>投递简历</button>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="● 高级测试工程师" name="8">
                                <div class="fenQing">
                                    <h3>职位信息</h3>
                                    <p>1.进行测试计划的安排与进度跟踪。</p>
                                    <p>2.测试报告相关文档编写。</p>
                                    <p>3.测试案例编写。</p>
                                    <p>4.对组内人员进度进行跟踪与技能培训。</p>
                                    <h3>职位要求</h3>
                                    <p>1.国家统招本科及以上学历,5年以上系统测试从业经验。</p>
                                    <p>2.具有银行业务测试经验优先。</p>
                                    <p>3.熟悉软件测试质量和管理流程。</p>
                                    <p>4.熟练使用OFFICE办公软件和测试管理工具。</p>
                                    <p>5.良好的组织协调、沟通及学习能力。</p>
                                    <p>6.具备一定的测试团队管理经验。</p>
                                    <p>欢迎专业方向一致的人才投递简历，有意者请发送简历(中或英文简历 含照片)，同时可附个人发表文章、专利或能代表个人能力的作品。</p>
                                    <p>附件标题 格式请用：高级测试工程师-姓名-学校-专业-学历-到岗时间。期待您的加入！</p>
                                    <p>联系人：赵先生</p>
                                    <p>邮箱：huanxunkeji@gshxkj.com.cn</p>
                                    <button>投递简历</button>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="● 初级运维工程师" name="9">
                                <div class="fenQing">
                                    <h3>职位信息</h3>
                                    <p>1.完成银行业务系统的日常运维工作。</p>
                                    <p>2.解决现场出现的系统问题。</p>
                                    <p>3.开发shell脚本，实现逐步运维自动化。</p>
                                    <p>4.收集客户需求，配合开发团队搭建自动化运维平台。</p>
                                    <p>5.参与现场其他工作。</p>
                                    <h3>职位要求</h3>
                                    <p>1.统招本科及以上学历，计算机相关专业毕业，至少1年以上银行业务系统运维工作经验。</p>
                                    <p>2.熟悉基础网络架构、操作系统、服务器和存储等技术。</p>
                                    <p>3.熟练使用Shell/Bat/Python语言开发自动化工具。</p>
                                    <p>4.熟练使用Oracle/DB2/Mysql等主流数据库，有数据库部署、备份、调优经验者优先。</p>
                                    <p>5.熟练掌握Apache/Tomcat/Weblogic/Was等中间件的安装、部署、运维工作。</p>
                                    <p>6.沟通协调能力较强，具备较强的责任心，有较强的自我学习能力，自我驱动能力，能吃苦耐劳，有带人经验优先。</p>
                                    <p>7.必须有银行业务系统运维经验。</p>
                                    <p>欢迎专业方向一致的人才投递简历，有意者请发送简历(中或英文简历 含照片)，同时可附个人发表文章、专利或能代表个人能力的作品。</p>
                                    <p>附件标题 格式请用：初级运维工程师-姓名-学校-专业-学历-到岗时间。期待您的加入！</p>
                                    <p>联系人：赵先生</p>
                                    <p>邮箱：huanxunkeji@gshxkj.com.cn</p>
                                    <button>投递简历</button>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="● 高级运维工程师" name="10">
                                <div class="fenQing">
                                    <h3>职位信息</h3>
                                    <p>1.负责运维团队管理及人员培养。</p>
                                    <p>2.完成银行业务系统的日常运维工作。</p>
                                    <p>3.解决现场出现的系统问题。</p>
                                    <p>4.开发shell脚本，实现逐步运维自动化。</p>
                                    <p>5.收集客户需求，配合开发团队搭建自动化运维平台。</p>
                                    <p>6.参与现场其他工作。</p>
                                    <h3>职位要求</h3>
                                    <p>1.统招本科及以上学历，计算机相关专业毕业，至少3年以上银行业务系统运维工作经验。</p>
                                    <p>2.熟悉基础网络架构、操作系统、服务器和存储等技术。</p>
                                    <p>3.熟练使用Shell/Bat/Python语言开发自动化工具。</p>
                                    <p>4.熟练使用Oracle/DB2/Mysql等主流数据库，有数据库部署、备份、调优经验者优先。</p>
                                    <p>5.熟练掌握Apache/Tomcat/Weblogic/Was等中间件的安装、部署、运维工作。</p>
                                    <p>6.沟通协调能力较强，具备较强的责任心，有较强的自我学习能力，自我驱动能力，能吃苦耐劳，有带人经验优先。</p>
                                    <p>7.必须有银行业务系统运维经验。</p>
                                    <p>欢迎专业方向一致的人才投递简历，有意者请发送简历(中或英文简历 含照片)，同时可附个人发表文章、专利或能代表个人能力的作品。</p>
                                    <p>附件标题 格式请用：高级运维工程师-姓名-学校-专业-学历-到岗时间。期待您的加入！</p>
                                    <p>联系人：赵先生</p>
                                    <p>邮箱：huanxunkeji@gshxkj.com.cn</p>
                                    <button>投递简历</button>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="● 信息安全工程师" name="11">
                                <div class="fenQing">
                                    <h3>职位信息</h3>
                                    <p>1.组织完成内网信息系统上线前评估。</p>
                                    <p>2.制定服务器漏洞扫描方案，配合完成服务器漏洞扫描工作。</p>
                                    <p>3.组织完成银行一些系统的内网系统接口测试，和一些协调工作。</p>
                                    <p>4.汇总、跟踪、验证各类安全评估发现问题的整改情况。</p>
                                    <p>5.分析网站监测报告，分析报告中的问题，对于需要修复的网站漏洞，提出具体的加固措施并组织加固。</p>
                                    <p>6.编写项目周报、月报等报告。</p>
                                    <h3>职位要求</h3>
                                    <p>1.全日制本科及以上学历。获得CISP认证优先，参加过网络安全攻防大赛并有获奖经历优先。</p>
                                    <p>2.具有2年以上的项目实施经验，具有良好的口头表达能力和文字表达能力。</p>
                                    <p>3.熟悉渗透测试的步骤、方法、流程，并熟练掌握各种常用的渗透测试工具。</p>
                                    <p>4.掌握安全漏洞的发现和利用方法，具备一定的实战经验，能够提出漏洞的加固建议。</p>
                                    <p>欢迎专业方向一致的人才投递简历，有意者请发送简历(中或英文简历 含照片)，同时可附个人发表文章、专利或能代表个人能力的作品。</p>
                                    <p>附件标题 格式请用：信息安全工程师-姓名-学校-专业-学历-到岗时间。期待您的加入！</p>
                                    <p>联系人：赵先生</p>
                                    <p>邮箱：huanxunkeji@gshxkj.com.cn</p>
                                    <button>投递简历</button>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="● QA质量管理工程师" name="12">
                                <div class="fenQing">
                                    <h3>职位信息</h3>
                                    <p>1.围绕银行项目质量要求，结合项目自身特点，协助银行客户完成质量策划，引导项目组使用合适的质量工程方法提高质量和效率。</p>
                                    <p>2.明确项目组质量导向和质量要求，搭建项目组质量氛围，树立正确的质量理念。</p>
                                    <p>3.在项目过程中，围绕质量策划开展项目级质量活动，并通过质量控制确保质量策划有效落地。</p>
                                    <p>4.引导项目组进行度量分析，牵引项目组进行问题的主动预防和改进。</p>
                                    <h3>职位要求</h3>
                                    <p>1.本科及以上学历，计算机软件相关专业。</p>
                                    <p>2.掌握软件开发、测试基础知识和技能。</p>
                                    <p>3.抗压能力强，良好组织沟通协调能力。</p>
                                    <p>4.有一年以上质量管理、项目管理经验，有银行项目经验优先。</p>
                                    <p>欢迎专业方向一致的人才投递简历，有意者请发送简历(中或英文简历 含照片)，同时可附个人发表文章、专利或能代表个人能力的作品。</p>
                                    <p>附件标题 格式请用：QA质量管理工程师-姓名-学校-专业-学历-到岗时间。期待您的加入！</p>
                                    <p>联系人：赵先生</p>
                                    <p>邮箱：huanxunkeji@gshxkj.com.cn</p>
                                    <button>投递简历</button>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="● 市场营销助理" name="13">
                                <div class="fenQing">
                                    <h3>职位信息</h3>
                                    <p>1.公司软件产品宣传以及项目推广。</p>
                                    <p>2.客户的维护和拓展，了解客户需求。</p>
                                    <p>3.协助处理商务事务，重要客户的接待，配合新项目拓展。</p>
                                    <p>4.与客户进行项目沟通、跟踪，准确、及时传达客户要求，与团队保持良好沟通。</p>
                                    <p>5.日常项目跟进与沟通，针对工作问题提出有效解决方案。</p>
                                    <p>6.完成各类项目活动的前期跟进、中期执行与项目后期总结工作。</p>
                                    <p>7.商务合同的撰写，协助营销经理完成年度合同、回款等各项任务指标。</p>
                                    <p>8.遵守公司规章制度，及时完成领导交代的其他工作任务。</p>
                                    <h3>职位要求</h3>
                                    <p>1.本科或以上学历，专业不限，具备软件行业产品策划、市场营销经验优先。</p>
                                    <p>2.性格开朗、有责任心、有团队协作精神和一定的组织协调能力，能承担和突破工作压力。</p>
                                    <p>3.语言要求表达清晰、流利，有较强沟通能力和强烈的上进心。</p>
                                    <p>4.有相关行业经验，能力突出者优先考虑。</p>
                                    <p>欢迎专业方向一致的人才投递简历，有意者请发送简历(中或英文简历 含照片)，同时可附个人发表文章、专利或能代表个人能力的作品。</p>
                                    <p>附件标题 格式请用：市场营销助理-姓名-学校-专业-学历-到岗时间。期待您的加入！</p>
                                    <p>联系人：赵先生</p>
                                    <p>邮箱：huanxunkeji@gshxkj.com.cn</p>
                                    <button>投递简历</button>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="● 市场营销经理" name="14">
                                <div class="fenQing">
                                    <h3>职位信息</h3>
                                    <p>1.负责维护、宣传和推介公司品牌形象，负责公司市场营销宣传的策划与实施。</p>
                                    <p>2.能够根据公司战略发展要求，制定全面的营销策略；负责市场分析和规划。</p>
                                    <p>3.负责维护和拓展大客户资源，牵头对接区域内高端客户营销工作。</p>
                                    <p>4.负责项目全程策划与跟踪，与客户的洽谈与对接与客户进行项目沟通、跟踪，准确、及时传达客户要求，与团队保持良好沟通。</p>
                                    <p>5.有能力建设和带领一支营销团队。</p>
                                    <p>6.掌握本区域软件市场营销环境、国家政策性文件、招投标市场规则及技巧、目标客户群和竞争对手信息。</p>
                                    <h3>职位要求</h3>
                                    <p>1.本科以上学历，管理类、市场营销、计算机专业，具有3年以上市场营销和管理经验。</p>
                                    <p>2.具有敏锐的市场感知，把握市场动态和市场方向的能力，对市场信息有独到的分析判断能力，了解软件行业的发展和关键操作与运营。</p>
                                    <p>3.优秀的营销策划、市场开拓及把握全局的能力；具备优秀的领导能力、团队管理能力、良好的协调沟通能力。</p>
                                    <p>4.拥有创新和较强的团队合作精神，善于组织、沟通，拥有较强的执行能力。</p>
                                    <p>欢迎专业方向一致的人才投递简历，有意者请发送简历(中或英文简历 含照片)，同时可附个人发表文章、专利或能代表个人能力的作品。</p>
                                    <p>附件标题 格式请用：市场营销经理-姓名-学校-专业-学历-到岗时间。期待您的加入！</p>
                                    <p>联系人：赵先生</p>
                                    <p>邮箱：huanxunkeji@gshxkj.com.cn</p>
                                    <button>投递简历</button>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                    <!--                        校园招聘-->
                    <div class="main2" v-show="index==3">
                        <div class="main2_content">
                            <div class="main2_left">
                                <img src="http://images.gshxkj.com.cn:8090/addHX/6.png" >
                            </div>
                            <div class="main2_right">
                                <h2><span>人才理念</span></h2>
                                <p>环讯科技始终坚持以人为本的人才发展理念，视人才为公司发展的核心竞争力，以人力资本为公司发展的首要资本，将员工的成长和企业的发展放在同等重要的位置。</p>
                            </div>
                        </div>
                        <div class="fenge"></div>
                        <el-collapse v-model="activeName2" >
                            <el-collapse-item title="● java开发工程师" name="1">
                                <div class="fenQing">
                                    <h3>职位信息</h3>
                                    <p>1.Java方向，从事银行中间业务、柜面、渠道等系统的开发设计工作，以及公众号、小程序、app全流程工作。</p>
                                    <p>2.负责产品的后台开发、编码以及单元测试工作。</p>
                                    <p>3.负责应用系统开发过程产出文档编写。</p>
                                    <h3>职位要求</h3>
                                    <p>1.统招2019届本科及以上学历，计算机相关专业毕业。</p>
                                    <p>2.掌握java、jsp、HTML、CSS、JavaScript、JQuery等web开发的基础技术。</p>
                                    <p>3.熟悉Oracle、DB2、MySQL、SqlServer任意一种数据库。</p>
                                    <p>4.掌握Spring、SpringMVC、SpringBoot、mybatis等框架。</p>
                                    <p>5.具有良好的文档编写能力。</p>
                                    <p>6.沟通协调能力较强，具备较强的责任心，有较强的自我学习能力，自我驱动能力，能吃苦耐劳，有相关实习经验者优先。</p>
                                    <p>7.有互联网金融相关经验者优先。</p>
                                    <p>欢迎专业方向一致的人才投递简历，有意者请发送简历(中或英文简历 含照片)，同时可附个人发表文章、专利或能代表个人能力的作品。</p>
                                    <p>附件标题 格式请用：java开发工程师-姓名-学校-专业-学历-到岗时间。期待您的加入！</p>
                                    <p>联系人：赵先生</p>
                                    <p>邮箱：huanxunkeji@gshxkj.com.cn</p>
                                    <button>投递简历</button>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="● 运维工程师" name="2">
                                <div class="fenQing">
                                    <h3>职位信息</h3>
                                    <p>1.完成银行业务系统的日常运维工作。</p>
                                    <p>2.解决现场出现的系统问题。</p>
                                    <p>3.开发shell脚本，实现逐步运维自动化。</p>
                                    <p>4.收集客户需求，配合开发团队搭建自动化运维平台。</p>
                                    <p>5.参与现场其他工作。</p>
                                    <h3>职位要求</h3>
                                    <p>1.统招本科及以上学历，计算机相关专业毕业。</p>
                                    <p>2.熟悉基础网络架构、操作系统、服务器和存储等技术。</p>
                                    <p>3.熟练使用Shell/Bat/Python语言开发自动化工具。</p>
                                    <p>4.熟练使用Oracle/DB2/Mysql等主流数据库，有数据库部署、备份、调优经验者优先。</p>
                                    <p>5.熟练掌握Apache/Tomcat/Weblogic/Was等中间件的安装、部署、运维工作。</p>
                                    <p>6.沟通协调能力较强，具备较强的责任心，有较强的自我学习能力，自我驱动能力，能吃苦耐劳，有带人经验优先。</p>
                                    <p>欢迎专业方向一致的人才投递简历，有意者请发送简历(中或英文简历 含照片)，同时可附个人发表文章、专利或能代表个人能力的作品。</p>
                                    <p>附件标题 格式请用： 运维工程师-姓名-学校-专业-学历-到岗时间。期待您的加入！</p>
                                    <p>联系人：赵先生</p>
                                    <p>邮箱：huanxunkeji@gshxkj.com.cn</p>
                                    <button>投递简历</button>
                                </div>
                            </el-collapse-item>

                        </el-collapse>
                    </div>
                    <!--                        实习生招聘-->
                    <div class="main2" v-show="index==4">
                        <div class="main2_content">
                            <div class="main2_left">
                                <img src="http://images.gshxkj.com.cn:8090/addHX/6.png" >
                            </div>
                            <div class="main2_right">
                                <h2><span>人才理念</span></h2>
                                <p>环讯科技始终坚持以人为本的人才发展理念，视人才为公司发展的核心竞争力，以人力资本为公司发展的首要资本，将员工的成长和企业的发展放在同等重要的位置。</p>
                            </div>
                        </div>
                        <div class="fenge"></div>
                        <el-collapse v-model="activeName3" >
                            <el-collapse-item title="● java开发工程师" name="1">
                                <div class="fenQing">
                                    <h3>职位信息</h3>
                                    <p>1.Java方向，从事银行中间业务、柜面、渠道等系统的开发设计工作，以及公众号、小程序、app全流程工作。</p>
                                    <p>2.负责产品的后台开发、编码以及单元测试工作。</p>
                                    <p>3.负责应用系统开发过程产出文档编写。</p>
                                    <h3>职位要求</h3>
                                    <p>1.统招2019届本科及以上学历，计算机相关专业毕业。</p>
                                    <p>2.掌握java、jsp、HTML、CSS、JavaScript、JQuery等web开发的基础技术。</p>
                                    <p>3.熟悉Oracle、DB2、MySQL、SqlServer任意一种数据库。</p>
                                    <p>4.掌握Spring、SpringMVC、SpringBoot、mybatis等框架。</p>
                                    <p>5.具有良好的文档编写能力。</p>
                                    <p>6.沟通协调能力较强，具备较强的责任心，有较强的自我学习能力，自我驱动能力，能吃苦耐劳，有相关实习经验者优先。</p>
                                    <p>7.有互联网金融相关经验者优先。</p>
                                    <p>欢迎专业方向一致的人才投递简历，有意者请发送简历(中或英文简历 含照片)，同时可附个人发表文章、专利或能代表个人能力的作品。</p>
                                    <p>附件标题 格式请用：java开发工程师-姓名-学校-专业-学历-到岗时间。期待您的加入！</p>
                                    <p>联系人：赵先生</p>
                                    <p>邮箱：huanxunkeji@gshxkj.com.cn</p>
                                    <button>投递简历</button>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="● 运维工程师" name="2">
                                <div class="fenQing">
                                    <h3>职位信息</h3>
                                    <p>1.完成银行业务系统的日常运维工作。</p>
                                    <p>2.解决现场出现的系统问题。</p>
                                    <p>3.开发shell脚本，实现逐步运维自动化。</p>
                                    <p>4.收集客户需求，配合开发团队搭建自动化运维平台。</p>
                                    <p>5.参与现场其他工作。</p>
                                    <h3>职位要求</h3>
                                    <p>1.统招本科及以上学历，计算机相关专业毕业。</p>
                                    <p>2.熟悉基础网络架构、操作系统、服务器和存储等技术。</p>
                                    <p>3.熟练使用Shell/Bat/Python语言开发自动化工具。</p>
                                    <p>4.熟练使用Oracle/DB2/Mysql等主流数据库，有数据库部署、备份、调优经验者优先。</p>
                                    <p>5.熟练掌握Apache/Tomcat/Weblogic/Was等中间件的安装、部署、运维工作。</p>
                                    <p>6.沟通协调能力较强，具备较强的责任心，有较强的自我学习能力，自我驱动能力，能吃苦耐劳，有带人经验优先。</p>
                                    <p>欢迎专业方向一致的人才投递简历，有意者请发送简历(中或英文简历 含照片)，同时可附个人发表文章、专利或能代表个人能力的作品。</p>
                                    <p>附件标题 格式请用： 运维工程师-姓名-学校-专业-学历-到岗时间。期待您的加入！</p>
                                    <p>联系人：赵先生</p>
                                    <p>邮箱：huanxunkeji@gshxkj.com.cn</p>
                                    <button>投递简历</button>
                                </div>
                            </el-collapse-item>

                        </el-collapse>
                    </div>

                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "aboutHX",
        data(){
            return{
                index:0,
                msg:'人文关怀',
                activeName1: ['1'],
                activeName2: ['1'],
                activeName3: ['1']
            }
        },
        watch: {
            '$route' () {
                this.index=this.$route.query.num||1;
            }
        },
        mounted(){
            document.body.scrollTop=0;
            document.documentElement.scrollTop=0;
            this.scrollTab()
        },
        methods:{
            tab(index,msg){
                const that=this;
                document.body.scrollTop=that.$refs.element.offsetHeight;
                document.documentElement.scrollTop=that.$refs.element.offsetHeight;
                this.index=index;
                this.msg=msg;
            },
            scrollTab(){

                const that=this;
                function htmlScroll1() {
                    var top = document.body.scrollTop || document.documentElement.scrollTop;
                    if (that.$refs.element.offsetHeight < top ) {
                        elFix.style.position = 'fixed';
                        elFix.style.top = '75px';
                        elFix.style.width = '300px';

                    }
                    else {
                        elFix.style.top = '0px';
                        elFix.style.width = '300px';
                        elFix.style.position = 'relative';
                    }
                }

                function htmlPosition(obj) {
                    var o = obj;
                    var t = o.offsetTop;
                    var l = o.offsetLeft;
                    while (o = o.offsetParent) {
                        t += o.offsetTop;
                        l += o.offsetLeft;
                    }
                    obj.data_top = t;
                    obj.data_left = l;
                }
                //
                var oldHtmlWidth = document.documentElement.offsetWidth;
                window.onresize = function () {
                    var newHtmlWidth = document.documentElement.offsetWidth;
                    if (oldHtmlWidth == newHtmlWidth) {
                        return;
                    }
                    oldHtmlWidth = newHtmlWidth;
                    elFix.style.position = 'static';
                    htmlPosition(elFix);
                    htmlScroll1();
                }


                window.onscroll = htmlScroll1;
                var elFix = document.getElementById('div3');
                htmlPosition(elFix);
            },
        }
    }
</script>

<style scoped lang="scss">
    .fenQing{
        background: #EAE9EC;
        padding: 30px 27px;
        h3{
            color: #515252;
            font-size: 15px;
        }
        p{
            color: #515252;
            line-height: 30px;
            font-size: 15px;
        }
        button{
            background:#006DBA ;
            color: #fff;
            font-size: 15px;
            outline: none;
            border: none;
            padding: 6px 20px;
            margin: 20px 0 0;

        }
    }
    .fenge{
        height: 8px;
        background: #A3BCD4;
        margin: 30px 0;
    }
    .main2_content{
        display: flex;
        .main2_left{
            flex: 2;
            img{
                width: 100%;
            }
        }
        .main2_right{
            flex: 1;
            h2{
                margin-top: 30px;
                color: #654DA3;
                font-size: 28px;
                font-weight: normal;
                text-align: right;
                span{
                    padding: 10px 0;
                    border-top: 3px solid #A3BCD4;
                    border-bottom: 1px solid #A3BCD4;
                }
            }
            p{
                margin-top: 30px;
                width: 80%;
                margin-left: 20%;
                color: #666666;
                font-size: #666666;
                line-height: 25px;
            }
        }
    }
    .ygfz{
        .ygfz_bottom{
            margin-top: -4px;
            box-sizing: border-box;
            padding: 23px 50px 38px;
            height: 194px;
            color: #fff;
            background: #8A9FAD;
            h3{
                color: #D5D5A1;
                font-size: 18px;
                margin-bottom: 16px;
            }
            p{
                font-size: 14px;
                line-height: 30px;
            }
        }
        .el-col{
            padding: 10px 0;
        }
        img{
            width: 100%;

        }
    }
    .ygfl:after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0
    };
    .main1{

        .ygfl{
            padding: 110px 0 30px;

            >div{
                width: 20%;
                float: left;
                position: relative;
                span{
                    display: block;
                    width: 100%;
                    background: #6598B1;
                    height: 2px;
                    position: absolute;
                    left: 50%;
                    z-index: -1;
                }
                div{
                    z-index: 999;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 69px;
                    height: 69px;
                    margin: 0 auto;
                    background: #6598B1;
                    border-radius: 50%;
                    img{
                        width: 65%;
                    }
                }
                p{
                    text-align: center;
                    color: #666565;
                    font-size: 18px;
                    margin-top: 20px;
                }
            }
        }
        &>h2{
            color: #003399;
            font-size: 18px;
            padding-left: 11px;
            border-left: 7px solid #FACD89;
            margin: 47px 0 21px;
            font-weight: normal;
        }
        &>p{
            color: #666;
            font-size: 14px;
            line-height: 30px;
            text-indent: 2em;
        }
    }
    .last1{
        width: 60% !important;
        transform: rotate(-90deg);
        -ms-transform: rotate(-90deg); /* IE 9 */
    }
    .hzhb{
        border: 1px solid #ccc;
        .el-col{
            div{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                border-right: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
                min-height: 176px;
                img{
                    width: 90%;
                    /*vertical-align: middle;*/
                }
            }
        }
    }
    .main{
        padding-top: 25px;
        color: #666;
        font-size: 14px;
        p{
            text-indent:2em;
            margin-bottom: 32px;
            line-height: 30px;
        }
    }
    .title_right{
        text-align: right;
        font-size: 12px;
        color: #999999;
    }
    .title{
        font-size: 18px;
        color: #333;
        display: inline-block;
        border-bottom: 4px solid #99CCCC;
        padding: 10px 0;
        img{
            vertical-align: bottom;
            margin-right: 5px;
        }
    }
    .lunBo{
        height: 392px;
        margin: 0 auto;
        background-image: url("http://images.gshxkj.com.cn/index/banner5.png");
        background-repeat: no-repeat;
        background-position: center ;
    }
    .content{
        width: 1196px;
        margin: -3px auto 0;
    }
    .left{
        width: 300px;
        position: relative;
        .active1{
            background: #6598B1!important;
            color: #fff!important;
        }
        .active2{
            color: #fff!important;
        }
        div{
            width: 100%;
            top: -126px;
            background:  RGBA(114, 156, 173, 0.3);
            position: absolute;
            height: 126px;
            line-height: 126px;
            text-align: center;
            color: #fff;
            font-size: 24px;
        }
        li{
            display: flex;
            align-items: center;
            width: 100%;
            height: 70px;
            color: #333;
            font-size: 16px;
            background: #F4F4F4;
            margin-bottom: 2px;
            box-sizing: border-box;
            padding: 0 35px;
            span{
                flex: 10;
            }
            i{
                font-size: 20px;
                flex: 1;
                color: #666;
            }
        }
    }
</style>