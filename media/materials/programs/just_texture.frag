uniform sampler2D diffuse_map;

void main()
{
        gl_FragColor = texture2D(diffuse_map, gl_TexCoord[0].st);
}
