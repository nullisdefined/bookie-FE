import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import Title from "../components/common/Title";

function Home() {
  return (
    <>
      <Title size="large" color="primary">
        제목 테스트
      </Title>
      <Button size="Large" schema="normal" disabled>
        버튼 테스트
      </Button>
      <InputText placeholder="텍스트 입력" />
      <div>Home Body...</div>
    </>
  );
}

export default Home;
