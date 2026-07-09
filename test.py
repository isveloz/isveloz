import vtracer
import os

input_path = 'public/padrino.png'
output_path = 'public/padrino.svg'

vtracer.convert_image_to_svg_py(
    input_path,
    output_path
)
print(f"Size: {os.path.getsize(output_path)}")
