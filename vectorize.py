import os
import vtracer

def vectorize_directory(directory):
    for filename in os.listdir(directory):
        if filename.endswith(('.png', '.jpg', '.jpeg')) and not filename.startswith('gallery'):
            input_path = os.path.join(directory, filename)
            output_filename = os.path.splitext(filename)[0] + '.svg'
            output_path = os.path.join(directory, output_filename)
            
            # Skip 0-byte files
            if os.path.getsize(input_path) == 0:
                continue

            if os.path.exists(output_path):
                continue
                
            print(f"Vectorizing {input_path} to {output_path}...")
            try:
                vtracer.convert_image_to_svg_py(input_path, output_path)
            except Exception as e:
                print(f"Failed to vectorize {input_path}: {e}")

if __name__ == '__main__':
    vectorize_directory('public')
