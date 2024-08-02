export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  // ButtonsContainer value should be string for built-in components and dynamic value for custom components
  // Ex: ButtonsContainer="menu" or ButtonsContainer={Section}
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
