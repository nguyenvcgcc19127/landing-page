import React, { useEffect } from "react";
import './secondpage.css';
import Aos from "aos";
import 'aos/dist/aos.css';

export default function SecondPage(){
    useEffect(() => {
        Aos.init({ 
            offset: 200,
            duration: 2000 
         });
     }, []);

    return( 
        <div id="second-wrapper">
        <h1>quy trình thiết kế</h1>
            <div className="content-wrapper">
                <div className="item-wrapper">
                    <div id="myDiv" className="nb">
                        <h2>1</h2>
                    </div>
                        <div className="content content-text">
                            <h3>Tiếp nhận thông tin doanh nghiệp</h3>
                            
                            <p>Chúng tôi thu thập các thông tin từ doanh nghiệp như nhân sự, quá trình phát triển,
                            năng lực tài chính, ngành nghề kinh doanh, các dự án, khách hàng tiêu biểu, nhận xét, đánh 
                            giá,... và thu nhập hình ảnh doanh nghiệp.</p>
                    </div>
                </div>
            </div>

            <div className="content-wrapper">
                <div className="item-wrapper">
                    <div id="myDiv" className="nb">
                        <h2>2</h2>
                    </div>
                        <div className="content content-text">
                            <h3>Định hướng, ý tưởng và nội dung</h3>
                            
                            <p>Chúng tôi sẽ gặp gỡ và trao đổi cụ thể để tiếp nhận yêu cầu sáng tạo cụ thể đổi với
                            thiết kế profile cho công ty và cả thiết kế profile cá nhân. Đồng thời chúng tôi sẽ có
                            những tư vấn cần thiết để cùng phát triển và hoàn thiện định hướng cơ bản trước khi lên
                            các phương án thiết kế.</p>
                    </div>
                </div>
            </div>

            <div className="content-wrapper">
                <div className="item-wrapper">
                    <div id="myDiv" className="nb">
                        <h2>3</h2>
                    </div>
                        <div className="content content-text">
                            <h3>Lên layout từ ý tưởng</h3>
                            
                            <p>Dựa trên những nội dung cơ bản được khách hàng cung cấp, đội ngũ designer chúng tôi sẽ sáng tạo nên từ 3 đến 
                            5 layout profile từ yêu cầu của cá nhân hoặc doanh nghiệp.</p>
                    </div>
                </div>
            </div>

            <div className="content-wrapper">
                <div className="item-wrapper">
                    <div id="myDiv" className="nb">
                        <h2>4</h2>
                    </div>
                        <div className="content content-text">
                            <h3>Thực hành các phương án thiết kế</h3>
                            
                            <p>Từ các layout và nội dung đã được biên tập, chúng tôi tiến hành thiết kế hoàn chỉnh từ 3 đến 5 bán profile tùy 
                            theo yêu cầu của khách hàng.</p>
                    </div>
                </div>
            </div>

            <div className="content-wrapper">
                <div className="item-wrapper">
                    <div id="myDiv" className="nb">
                        <h2>5</h2>
                    </div>
                        <div className="content content-text">
                            <h3>Hoàn thiện, bàn giao & in ấn</h3>
                            
                            <p>Trong quá trình thực hiện, chúng tôi sẽ hổ trợ chỉnh sửa thiết kế profile dựa trên phản hồi của khách hàng.
                            Khi kết thúc dự án, chúng tôi sẽ bàn giao file thiết kế để khách hàng tùy ý sử dụng. Chúng tôi cũng sẽ cung cấp 
                            dịch vụ in ấn với sự đảm bảo về chất lượng cao nhất đối với profile thành phẩm.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}