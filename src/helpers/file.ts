export function readFile(file: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      reader.result &&
        typeof reader.result !== "string" &&
        resolve(reader.result);
    };
    reader.onerror = () => reject(reader.error);

    reader.readAsArrayBuffer(file);
  });
}
