import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Button from "../Button";
import Container from "../Container";

const About = (props: any) => {
  return (
    <Container id="nav-0" title="About Me">
      <div style={{ flex: "50%", padding: 20 }}>
        <Image
          alt="profile-pic"
          className={styles.profileImage}
          width="100%"
          height="100%"
          layout="responsive"
          src="https://scontent.fsyd7-1.fna.fbcdn.net/v/t1.6435-9/128624862_3571608776279779_6774552934546622038_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Kxnj3qWMxZEAX_iD0bc&tn=yWRf2j0DxWaWIHYH&_nc_ht=scontent.fsyd7-1.fna&oh=bee791c6b56b0ea8d0635db3706ea224&oe=61432DA2"
        />
      </div>

      <div style={{ flex: "50%" }}>
        <p style={{ lineHeight: 1.8 }}>
          Xin chào! Mình là Nguyễn Đức Tuấn, tên tiếng Anh là Chris. Mình có 2
          năm kinh nghiệm học tập và làm việc với công nghệ PHP và MERN stack.
          Ngoài ra, Mình còn có kiến thức chuyên sâu về thiết kế cơ sở dữ liệu,
          phát triển, thiết kế phần mềm và lập trình hướng đối tượng (OOP). Tích
          lũy kiến thức về các công nghệ mới, cũng như viết code là điều mà Mình
          luôn cảm thấy thích thú và đam mê (Mình có thể tự học MERN stack trong
          4 tuần). Mình có thể làm việc nhóm hiệu quả bởi mình có khả năng thúc
          đẩy mọi người trong nhóm làm việc và truyền động lực cho các bạn cùng
          team hoàn thành tốt công việc. Ở trường đại học, mình thường hỗ trợ và
          giúp đỡ các bạn học tập, đặc biệt là những bạn học sinh mới vào
          trường. Ước mơ hiện tại của mình là được trở thành 1 kỹ sư phần mềm
          giỏi mà mọi người trong team có thể yên tâm dựa vào.
        </p>
        <Button type="primary">Download my CV</Button>
      </div>
    </Container>
  );
};

export default About;
