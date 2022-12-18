import Counter from 'components/Counter/Counter';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        fontFamily: 'Baloo Tamma',
        background: '#1e90ff',
      }}
    >
     <Counter />
    </div>
  );
};
