export default function Close() {
  function handleClose() {
    window.close();
  }

  return (
    <img src="/images/close.png" className="w-[12%]" onClick={handleClose} />
  );
}
