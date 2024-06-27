import styled from 'styled-components';
import { useStore } from '@store'

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const { count, increaseCount } = useStore()
  return (
    <StyledApp>
      <button onClick={increaseCount}>Incrementar</button>
      {count}
    </StyledApp>
  );
}

export default App;
