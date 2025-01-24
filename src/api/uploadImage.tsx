export const uploadImage = async (file: File): Promise<string | null> => {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch('http://3.35.116.122:8080/api/image/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const imageUrl = await response.text();
    return imageUrl; // 업로드 성공 시 반환된 이미지 URL
  } catch (error) {
    console.error('Image upload failed:', error);
    return null; // 업로드 실패 시 null 반환
  }
};
