interface Toggle{
  isToggle: boolean
}

export default function Toggle({ isToggle }: Toggle) {
  return <div>{isToggle ? 'On' : 'Off'}</div>;
}