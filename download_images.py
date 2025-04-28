import requests
import os

# Create images directory if it doesn't exist
if not os.path.exists('images'):
    os.makedirs('images')

# Image URLs and their corresponding filenames
images = {
    'about-image.jpg': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'blog1.jpg': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'blog2.jpg': 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'blog3.jpg': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'blog4.jpg': 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    # Hero section images
    'hero1.jpg': 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'hero2.jpg': 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'hero3.jpg': 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'hero4.jpg': 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
}

# Download each image
for filename, url in images.items():
    try:
        response = requests.get(url)
        if response.status_code == 200:
            with open(f'images/{filename}', 'wb') as f:
                f.write(response.content)
            print(f'Successfully downloaded {filename}')
        else:
            print(f'Failed to download {filename}')
    except Exception as e:
        print(f'Error downloading {filename}: {str(e)}') 