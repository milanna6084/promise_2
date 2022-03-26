export default async function json(data) {
  return new Promise((resolve, reject) => {
    // эмуляция обработки ArrayBuffer
    setTimeout(() => {
      try {
        resolve(JSON.parse(
          String.fromCharCode.apply(null, new Uint16Array(data)),
        ));
      } catch (e) {
        reject(new Error('Error in parsing file'));
      }
    }, 500);
  });
}
