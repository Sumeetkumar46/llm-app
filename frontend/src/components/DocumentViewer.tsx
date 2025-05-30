export const DocumentViewer = ({ file }: { file: File | null }) => {
  if (!file) return null;
  return <embed src={URL.createObjectURL(file)} type="application/pdf" width="100%" height="600px" />;
};