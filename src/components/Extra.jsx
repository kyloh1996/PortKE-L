import React,{useState} from 'react'
import styled from 'styled-components';

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Section = styled.div`
  height: 80vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
  `;

  const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  
  `;

  const Left = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  `;

  const ListItem = styled.div`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  color: black;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: blue;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

  const List = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

`;

  const Right = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:60px;
 
  `;

  const Img = styled.div`
  `;

function Extra() {
  const [work, setWork] = useState("Web Design");
    return (
<Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          <Img> FOR PLACEMENT </Img>
        </Right>
      </Container>
    </Section>    );
  }
  
  export default Extra;