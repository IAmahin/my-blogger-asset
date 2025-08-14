functioninitializeApp() {
    // --- NATIVE TEMPLATES (HOSTED) ---
    const templates = {
        frames: [
            { 
                name: 'RTV Frame', 
                url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACAAAAAgACAYAAACyp9MwAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAJTBpJREFUeJzsfWmQHNWV7ulVK2IRQixCYgcBAsxiJDaJ3ez7YjNj8IzDLxzPfh7PvIl4MRPv/WEiJubNxBvHGLwExgYLvGBjsxsLEGIxmyXMjhAgGwkjBAIjtKu7ut/5TubJOnU7K7O6b1VnVdf9FKWqrsq8efPec29m3u8753R8rWPqIHlgcNBrd28MUmehx6eOAa/dB4quvycGO/z2H/BrPurs8Gu/gUHPChQM39rn9V/e+C7JGPRHtXro8aud54Dn0Uu8f1YJWb/ilwG2v8z9c9pvgM/bnru7db9jn247ufOH+7t7fPs7Sh6gDi8bQvtn2RDOrxqi9ovq1FGlmTrj7zs6ooLsew8b3xR+9WASib/X3/S4AwP96eWabX2Q13alAYyQ6mj01bOzM3t+HNJ3g5XbD52fnfK6UEb1VhjImeCz7KOW+nMDj6hcbXfPy1du/2WNf7T9YAc3IKMTI5E3xWjs4lPq5v3wy6SuHurmb7t4Hujmo3Xx9534W2reweVXngHmM1sv+zfaxM6XOJ7v3UdH3ILuPJk3LpJqu/PTMK8TJc8bkLz7x+yrg//1N+/6lTc/+Vz/ov5nm+Jj4DNsqpsPB3vDvAs7YwurOM9B/mSvWVJGRhXy2q9oVL2v4DYp9XTTuOm70YxDD6HDjj+O9uf3HafuQuN2mEzdvb3JvSf6qIPnKekrfVWB/JLxe4T8NpN5pbmbtiXge/0PyIeYqUwangVJEbD7vIJqGF8owqc+8enYl0dR1NXFc67MHR4FAQWvxwQUiHrMZYn5NIcdyWUu+i/zSXyAnwOwBcYQrsVyJ83PXv3b+2jbtq308doP6OWnf0/LHlpM61aspMGt2+pSv7znDF/krR8U3Uu+6y+5z2m55++5/lfw5d+9d9bq6FlF9+B8bcD/sG1+4ZlY79k7Sv3JPXoahqz/OL/79p/vBavo9cuioc/nRcH36KH9/ZDXfnnPJ4NFT2CtDlm7rG4Dee3f4bH+hLnft/d0/a0ogD/wua5mrR0F5MN3+AcBgC+CAMALQQDgh6JvoIMAIAgARkMAALgigF7eeTJXvpcXf1CO+3sQAAQBQDU0uwAARH83fz+xu4c/g5Tlv7ktu3mnTt5PHh4w99QgANBxBgQBQBAAWODqJeQ/Hwe21QVBAIQA5tESLdQuAoBBiMe6uqhz0kTaacaetP/RR9Ihxx1D+x05h6bPnEm9kyZQR3dXJKZh28XiK8ZhZxcEABiPeUeMN8jaDm2LQZ658BCvHjR38zY32IgrZ8uAxiAiMerVzNlzSnJhyR+CvmsXMSHjuwxXfsKpQwOF9eD2Rb2msaayofzKJKI6EQnE4h6MTX7DGB8olWjbhk20evkKWvbwEnrpsSdpzVt/pO2fbqSO/uznszwEAUAQAPigFgGAvmOtU0UAuF8XUUAQADQ1P5GHwgno0P6FHj8IAApGEAB4IQgAikUQABRNoAcBgBeCAMAPRd9ABwFAEAD4CgCy0DEAgqWS2Nf3bq74DnxwEKP2hk2IVL1xqyIAqJcHYPnI6QgCgCAAyIQh+lwBAKQBE7q7qRMRAUQAEL9LBICo9jr+7TwVeSSCqh06zrQ+KroJAoD2FgBEV5CI8K9855ZJeUAti7aiMx8rAgA5L8w1EyfQjnvvRQccezQdOvc42mf2wTR1z+k0fuedqJtFASD6cU79PK9F947cXvxdVyfLJmISIo97jMZgtY1iT6+cgSmUalj78QK6YYDvL4LXdCMREeTimVsHg4XkJvOiHfdlnrCjXl0u51UHAUBpkJ9EZD6pDyETpob2g7+YqQltp5Z5Q8Tf8X0wxlD8/Kf7Qag30NdHfRs20ydrPqB3XltOL/3uGXr9qWdp3R9XUd/G...'},
        ],
        photos1: [
            { name: 'ক্যাবলা নিলয়', url: 'data:image/jpeg;base64,/9j/4QCbRXhpZgAATU0AKgAAAAgABAEAAAMAAAABA8AAAAEBAAMAAAABA7wAAIdpAAQAAAABAAAAPgESAAMAAAABAAEAAAAAAAAAApKGAAIAAAANAAAAXJIIAAQAAAABAAAAAAAAAABPcGx1c18xMzEwNzIAAAMBAAADAAAAAQPAAAABAQADAAAAAQO8AAABEgADAAAAAQABAAAAAAAA/+AAEEpGSUYAAQEAAAEAAQAA/+ICBElDQ19QUk9GSUxFAAEBAAAB9GFwcGwEAAAAbW50clJHQiBYWVogB+IABgAYAA0AFgAgYWNzcEFQUEwAAAAAT1BQTwAAAAAAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1hcHBsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJZGVzYwAAAPAAAABoY3BydAAAAVgAAAAkd3RwdAAAAXwAAAAUclhZWgAAAZAAAAAUZ1hZWgAAAaQAAAAUYlhZWgAAAbgAAAAUclRSQwAAAcwAAAAoZ1RSQwAAAcwAAAAoYlRSQwAAAcwAAAAoZGVzYwAAAAAAAAAEc1JHQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAENvcHlyaWdodCBBcHBsZSBJbmMuLCAyMDE3AABYWVogAAAAAAAA9tYAAQAAAADTLVhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAKMAaEDASIAAhEBAxEB/8QAHwAAAgICAwEBAQAAAAAAAAAABwgGCQUKAAMEAQIL/8QAahAAAAUCBAMEBQcHCAUIBgAXAQIDBAUGEQAHEiETMUEIFCJRFSMyYXEJM0JDUoGRFiQ0U2KhsSU1RGNywdHwF1SCkuFFVWRzdIOi8QoYJlZlk7I2V5bSGSdYhIWjwjdGR3WUlaWmpLTi/8QAHQEAAgIDAQEBAAAAAAAAAAAABAUABgEDBwIICf/EAEkRAAEBBQUECAMFBQYGAgMAAAERAAIDITEEBUFRYRIUcYEGIjKRobHh8BPB0QcVQlJyJDNiwvEWIzSCkrIXJTVTotJD4ghz8v/aAAwDAQACEQMRAD8A3mMcxzHMXhqe3McxzHMRt7tBwHk3MdqHMfiP8TY6scxghQRm2W9JuY/Ef44+Y+F5B8A/hj7jQ0bmOY5jmI0bmOY5jmI0bmOY5jvLyD4B/DA7RujHeXkHwD+GPuOYjRuY5jmO8vIPgH8MRo3C8g+Afwx9xzHMRo3McxzHMRo3eXkHwD+GPuPheQfAP4Y+4HaNzHMcxzEaNzHeXkHwD+GOjHeXkHwD+GI0b7j3E9gv9kv8Ax4ccwOw7ZDHMfknsF/sl/gGP1iNG5jmOY5iNG5jmOY5iNG7y8g+Afwx9x8LyD4B/DH3A7b3aDgPJvM45fd/cbEErce8xzMobd0kkX4/Fi11iHXmJem/u64nh/pff/fgRZ11DHUbl7LSK/zUkRSMT3AfzuR1kMNthuKgnAQ6DfpgK8LZu1ietNA5joEGIOSUnk2+x4/q/wDVq2q2aOs...'},
            { name: 'পাগলা নিলয়', url: 'data:image/jpeg;base64,/9j/4QCbRXhpZgAATU0AKgAAAAgABAEAAAMAAAABB/sAAAEBAAMAAAABCAAAAIdpAAQAAAABAAAAPgESAAMAAAABAAEAAAAAAAAAApKGAAIAAAANAAAAXJIIAAQAAAABAAAAAAAAAABPcGx1c18xMzEwNzIAAAMBAAADAAAAAQf7AAABAQADAAAAAQgAAAABEgADAAAAAQABAAAAAAAA/+AAEEpGSUYAAQEAAAEAAQAA/+ICBElDQ19QUk9GSUxFAAEBAAAB9GFwcGwEAAAAbW50clJHQiBYWVogB+IABgAYAA0AFgAgYWNzcEFQUEwAAAAAT1BQTwAAAAAAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1hcHBsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJZGVzYwAAAPAAAABoY3BydAAAAVgAAAAkd3RwdAAAAXwAAAAUclhZWgAAAZAAAAAUZ1hZWgAAAaQAAAAUYlhZWgAAAbgAAAAUclRSQwAAAcwAAAAoZ1RSQwAAAcwAAAAoYlRSQwAAAcwAAAAoZGVzYwAAAAAAAAAEc1JHQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAENvcHlyaWdodCBBcHBsZSBJbmMuLCAyMDE3AABYWVogAAAAAAAA9tYAAQAAAADTLVhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCALRAjUDASIAAhEBAxEB/8QAHwAAAQQCAwEBAAAAAAAAAAAAAAYHCAkEBQIDCgEL/8QAWRAAAgEDAwMCBAMFBAYECgMRAQIDBAURAAYSBxMhCDEUIkFRCTJhFSNxgaFCkcHRFiQzUrHwcrLh8QoXNDU2Q2JzdLMlOXWCtLXCGBk3OFN2d5ImVGO2w//EAB0BAAICAwEBAQAAAAAAAAAAAAAEAwUCBgcBCAn/xABFEQABAgQEAwYEAwgBAgYCAwEBAhEAAyExBBJBUQVhcQYTIoGh8DKRsdFCweEHFCMzUnKy8WI00ggVQ4KSohbCJCVjs//aAAwDAQACEQMRAD8A9+GjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0aNEEGjRo0QQaNGjRBBo0a...'},
            { name: 'Niloy3', url: 'data:image/jpeg;base64,/9j/4QCbRXhpZgAATU0AKgAAAAgABAEAAAMAAAABAtAAAAEBAAMAAAABBkAAAIdpAAQAAAABAAAAPgESAAMAAAABAAEAAAAAAAAAApKGAAIAAAANAAAAXJIIAAQAAAABAAAAAAAAAABPcGx1c18xMzEwNzIAAAMBAAADAAAAAQLQAAABAQADAAAAAQZAAAABEgADAAAAAQABAAAAAAAA/+AAEEpGSUYAAQEAAAEAAQAA/+ICBElDQ19QUk9GSUxFAAEBAAAB9GFwcGwEAAAAbW50clJHQiBYWVogB+IABgAYAA0AFgAgYWNzcEFQUEwAAAAAT1BQTwAAAAAAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1hcHBsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJZGVzYwAAAPAAAABoY3BydAAAAVgAAAAkd3RwdAAAAXwAAAAUclhZWgAAAZAAAAAUZ1hZWgAAAaQAAAAUYlhZWgAAAbgAAAAUclRSQwAAAcwAAAAoZ1RSQwAAAcwAAAAoYlRSQwAAAcwAAAAoZGVzYwAAAAAAAAAEc1JHQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAENvcHlyaWdodCBBcHBsZSBJbmMuLCAyMDE3AABYWVogAAAAAAAA9tYAAQAAAADTLVhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAMPAtADASIAAhEBAxEB/8QAHwAAAQQDAQEBAQAAAAAAAAAABgMEBQcCCAkKAQAL/8QAYRAAAQIDBAUHCAcFBgIHBgAPAQIDBAURABIhMQYTQVFhBwgiMnGBoRQjM1KRsdHwCRVCYoKywXKSotLhFiQ0Q1PxCuIXJWNzg5OzNURUo8LTGBkmJzZFZBopRlZldKR2/8QAHQEAAgMBAQEBAQAAAAAAAAAAAAQCAwUGBwgBCf/EAFgRAAECAwQHBQQGBgkBBQYFBQEAAgMRUQQSITEFE0FhgaHRBiJxkfAUMlLBBzNysdLhFSNCU2KSFiQ0Q1SCotPxYwg1VXOyNkRkdJPCFyWUldQmg6Pi4//aAAwDAQACEQMRAD8A8vkBpKVkBTxpXZdSc96QndvtfGi+mbzDjTjkY5faPQUVJFBXKgFCMMSoHbvNNI2491mM1bbhSgUwog5ZG8pJVs3042saRaRPOdd+vG62O09FAPv7reexdFWOL78MHgJ+a7CHpCIzMu4dSQf+dy6k6J8prjmK1qUcf/eFJruyUMvZstd+i3LREQ9AoFONKB6gFeA+T325T6PaUiFrWJcT/wCIrvzJp/S1iy7Tt2o/vixiP9Pv+zs8aWwP6OWX92z+Q9Fb+k31f5/mut0Ry1LRLilweUBSVJweugVBBN1JSMK44Y54W0o5Qp8hKY8B1URicb5I27jh7K4bbA0t01KW9VERS1t49ElOHeADt347RYPn+k0I6l3VrqHQb94371QfWvXd3Rpx2W/YOgRZiDBbDbiD+2MvBhnymc1+RNIa3375luH4iqC0ymq9ap2HcuL...'},
            { name: 'Niloy4', url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/7QBsUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAFAcAigASkZCTUQwZjAwMDc1MzAyMDAwMDkyNGYwMDAwOGM5ZjAwMDA3YmI4MDAwMDVkY2YwMDAwYzJkYzAwMDBjZTJlMDEwMDYwMzEwMTAwAP/bAMQACQgIEAsQEA8PEBcREhEXGBgUFBgYGhYYFxgWGhscGx0dGxwbHBofIB8aHB0fIiIfHSAmJiYgJiMjJiomKiUlHhEACAAHAAcADgAKAA4ADAANAA0ADAATAA0ADwANABMAEQARAA4ADgARABEAFAAPABAADwAQAA8AFAAWABMAEgATABMAEgATABYAFAASABEADwARABIAFAAVABMAFgAWABMAFQAWABEAEwARABYAFQAWABYAFQAgACMAIAAgACABC//CABEIBLAEsAMBIgACEQEDEQH/xAD2AAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwgBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQYQAAICAQQBAwMEAQQDAAIDAAABAgMRBBASIRMFIDEUIkEwMlBgQCMzQlEGFXBDYVKAoBEAAgIBBAIABQQDAQEAAwAAAAECEQMEEBIhIDEFEzBAQRQiMkJQUVIVYiNgYRIAAQEEBwYFAwQCAAcBAAAAAQAQESEwAiAxQEFR8GBhcYGRsRJQocHRA3DhIjJCYlLxEyNygpKgouITAAMAAgECBQQCAwEBAAAAAAABERAhMUFRIGFxgZEwQKGxwfBQ0fHhYP/aAAwDAQACEQMRAD8A9CVD3PJUAQCjRQQKioABgAAgJQBgKCCqho5AQVGAAAAAAAAAAAAIoqEFARRQRQQAAAAAAAAACFBAAAoAoAAACjgEVABSAUUABAACiKAoIHIAoigOa4AAAAFBZABSqo5AAAqPQIqAqosigoCosigIAAcIowAaqhNKqKMAVqqKMVFVq5rlaKOnVFUVooAoAwAAAAAAAAAAAORFPc8pFAFAkAAAAQVUIKoNHAIqrIiqo2jkBqPaJEcjERwDRwxoqgiOAaOQAAFAQAAAAAACiAFBqgACiQUGCgkFAAAAUEUUACQBUKIoCgAAgABVaoKCoAAFHAAAAAAsyKCBVECooAAK5rkCKAKLIKKhFUQighVAoAAABQWaAUYCqxyBagTSua80VyLGwAMAAAAAAAAAAAAAAADk0U9rygAAUQiigCkiDgEVQEUUYKIQVZbo3IJqKloFAaOQGjgGqoCCoCDkBBQEAYAoIKgAKCKCQCjQUEKAIKAAAAAKigOABAAJBUVAooIqKAAACoUQQoAKAAKEiqFALIKioUHIRQJAAVzXIQASua6WAAKCFBUkUExwAAFAAKANRFmlAVKAUqoqoVHK1ex87qArAAAAAAAAAAAAAAAAAA5NVPZ8oAQqggFAAUEFAAAAcCASwVZABgCJgFSNc2gHNBBQEAAAARQEFBIoDABAAAAAAAAAAgFGAAAA4aoAEgACgIVWqCooCKACggBUI5FABQcACApIqLIoCHKioAAAckAAKjpagAKioFRRCghHtE3AFAAAAKqE0qoowFVgA1VFVjkVWrmunVVRVYAMAAAAAAAAAAAAAAADlVD2PKRRUKAAAAAAqKADgRQkRzXKgASKICiAIAIUGAFA1wA1zQcADUe0EFQBUUBAEAAAAAoIAACgigACgASAACooIoIFFBBQEUAAVACkgKgAAUA...'},
        ],
        photos2: [
            { name: 'women1', url: 'data:image/jpeg;base64,/9j/4QCbRXhpZgAATU0AKgAAAAgABAEAAAMAAAABAqoAAAEBAAMAAAABBQAAAIdpAAQAAAABAAAAPgESAAMAAAABAAEAAAAAAAAAApKGAAIAAAANAAAAXJIIAAQAAAABAAAAAAAAAABPcGxuc18xMzEwNzIAAAMBAAADAAAAAQKqAAABAQADAAAAAQUAAAABEgADAAAAAQABAAAAAAAA/+AAEEpGSUYAAQEAAAEAAQAA/+ICBElDQ19QUk9GSUxFAAEBAAAB9GFwcGwEAAAAbW50clJHQiBYWVogB+IABgAYAA0AFgAgYWNzcEFQUEwAAAAAT1BQTwAAAAAAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1hcHBsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJZGVzYwAAAPAAAABoY3BydAAAAVgAAAAkd3RwdAAAAXwAAAAUclhZWgAAAZAAAAAUZ1hZWgAAAaQAAAAUYlhZWgAAAbgAAAAUclRSQwAAAcwAAAAoZ1RSQwAAAcwAAAAoYlRSQwAAAcwAAAAoZGVzYwAAAAAAAAAEc1JHQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAENvcHlyaWdodCBBcHBsZSBJbmMuLCAyMDE3AABYWVogAAAAAAAA9tYAAQAAAADTLVhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAHHAUoDASIAAhEBAxEB/8QAHwAAAQQDAQEBAQAAAAAAAAAABwUGCAkAAwQKAgEL/8QAWhAAAQMCBQIDBQQHAwgFCQUJAQIDEQQFAAYSITEHQRMiUQhhcYGRFDKhsQkVI1LB0fBC0+EWGCQzU1eV8RdDYnKSGSUnNDVFVFVzJkR0gpMKNkZHhZaixOL/xAAcAQABBQEBAQAAAAAAAAAAAAAFAAMEBgcCAQj/xABREQABAgMFAwoDBQQHBgUDBQABAhEAAyEEMUFRYQUSEwYiUnGBkaGx0fAUIzIHM0JTwRUWYuEkVGOSk9LxFzREcpSyCENkosKz0+M1c4LU4v/aAAwDAQACEQMRAD8AvzovZr9nupq/AX0R6fJSCJULFR7jaeWY/lh0Vnsy+zcxsnob08JI2JsVHIJ2nZneOcGLLLKq1VTUrbDamTASndJgckncfDfGV9QpVWWNIASBCt5JER7u+NF4cvoJ7ur0HdGM260z5JIlzVpDG46jN4AivZg9nXSr/wBC+QOD/wC4KL0/+lhHHsx+z6ghSei2QApJ1JP6ho9incH/AFXqMSG+0HulMd9hx9MKNKzTVI3VpmQIg+7ececKX0E9w09B3RD/AGlT71btT5ir2Trn5aOK3OuXsCezj1Xpw8304sGU79TkPU95sdtptf2lo62FO0i2wyttLoSVIg6xKd5wFDkTJ/SCwjJntNey1k7qT09cQUUnWzp/lmmcuNlUoaUv5isNOyXaVxkkPLLKdCNBnacW+19hWZW0dWkFRjYwDJ0kfdMCQRJncbxhDTVpYS6x9hp0NVSFs1TT7KalF...'},
            { name: 'women2', url: 'data:image/jpeg;base64,/9j/4QCbRXhpZgAATU0AKgAAAAgABAEAAAMAAAABAmUAAAEBAAMAAAABBQAAAIdpAAQAAAABAAAAPgESAAMAAAABAAEAAAAAAAAAApKGAAIAAAANAAAAXJIIAAQAAAABAAAAAAAAAABPcGx1c18xMzEwNzIAAAMBAAADAAAAAQJlAAABAQADAAAAAQUAAAABEgADAAAAAQABAAAAAAAA/+AAEEpGSUYAAQEAAAEAAQAA/+ICBElDQ19QUk9GSUxFAAEBAAAB9GFwcGwEAAAAbW50clJHQiBYWVogB+IABgAYAA0AFgAgYWNzcEFQUEwAAAAAT1BQTwAAAAAAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1hcHBsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJZGVzYwAAAPAAAABoY3BydAAAAVgAAAAkd3RwdAAAAXwAAAAUclhZWgAAAZAAAAAUZ1hZWgAAAaQAAAAUYlhZWgAAAbgAAAAUclRSQwAAAcwAAAAoZ1RSQwAAAcwAAAAoYlRSQwAAAcwAAAAoZGVzYwAAAAAAAAAEc1JHQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAENvcHlyaWdodCBBcHBsZSBJbmMuLCAyMDE3AABYWVogAAAAAAAA9tYAAQAAAADTLVhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAF7AQQDASIAAhEBAxEB/8QAHwAAAQQCAwEBAAAAAAAAAAAABwUGCAkECgACAwEL/8QAWRAAAgECBQIEAwYCBQYJCAgHAQIDBBEABQYSIQcxCBMiQRRRYQkjMkJxgRWRJDNSocEWNLGy0fAXGCVDVGJykvFEY4Kz0tPU4QomJzZTc5OUNUVVdHWVwv/EAB0BAAEFAQEBAQAAAAAAAAAAAAUAAgQGBwEDCAn/xABUEQACAAQCBgQJCAUJBgUFAAABAgADESESMQQFQVFhkQYiMnEHE0JScoGhsfAUFSMzYpLB0QhDVLLhFhg1N1OCk7PxFyRVc3XCJTREtdJjlKKjtP/aAAwDAQACEQMRAD8Ao9+078LXS7w3dXeoGneluVmgosm1NJltJM2bCd44YmQSnyQ53gEtC4sQhe7WZcBTw09LNP8AUTSWdVeZxR18tHTuzFJACGQXUGRTdDvAH1Nl7mwnj9tPTzr146pu0Uio+s862MyMqtarS+0keq3vYngXxGb7PamSu0vq2nJBDRT77WIUqrML88cqPni0eBnQtF114Oujus9YaOustaTNBlPP0zSNpwKxZWcgHaRQ57TlGbdJ9Yaw0LXE1Jc0keMVXeWS2CrUJ6uRAqQLVNNsCfpp0o0vmWr88oanK2p3y5q5YvPqS1ilNUbT5Tn1biAF47kW9sRoz3Lkh6sQ6aqIz/C5MzamlpN7QtJGyyCIC+0gBwjg++23yvYH0/p4YusGp6MugDzZgLFgOVpaplAB+ZUW+vHPbECepLVFH4i6WFY39OeU112tfaZTdiLfhC834AHN+DjTfmfQrf7...'},
            { name: 'women3', url: 'data:image/jpeg;base64,/9j/4QCbRXhpZgAATU0AKgAAAAgABAEAAAMAAAABAk4AAAEBAAMAAAABBQAAAIdpAAQAAAABAAAAPgESAAMAAAABAAEAAAAAAAAAApKGAAIAAAANAAAAXJIIAAQAAAABAAAAAAAAAABPcGx1c18xMzEwNzIAAAMBAAADAAAAAQJOAAABAQADAAAAAQUAAAABEgADAAAAAQABAAAAAAAA/+AAEEpGSUYAAQEAAAEAAQAA/+ICBElDQ19QUk9GSUxFAAEBAAAB9GFwcGwEAAAAbW50clJHQiBYWVogB+IABgAYAA0AFgAgYWNzcEFQUEwAAAAAT1BQTwAAAAAAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1hcHBsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJZGVzYwAAAPAAAABoY3BydAAAAVgAAAAkd3RwdAAAAXwAAAAUclhZWgAAAZAAAAAUZ1hZWgAAAaQAAAAUYlhZWgAAAbgAAAAUclRSQwAAAcwAAAAoZ1RSQwAAAcwAAAAoYlRSQwAAAcwAAAAoZGVzYwAAAAAAAAAEc1JHQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAENvcHlyaWdodCBBcHBsZSBJbmMuLCAyMDE3AABYWVogAAAAAAAA9tYAAQAAAADTLVhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAFtASADASIAAhEBAxEB/8QAHgAAAgICAwEBAAAAAAAAAAAABwgGCQQFAgMKAAH/xABOEAACAQMDAwIEBAQDBQYEAA8BAgMEBREGEiEABzETQQgiUWEUMnGBCRUjkUKhsRYkM8HwF1JX0eHxJkNyltI2YhiC0zRHU1VzkpPC4//EAB4BAAEFAQEBAQEAAAAAAAAAAAcEBQYICQMCAQAK/8QATREAAQMCBQIEAgcEBQoEBgMAAQIDEQQhAAUGEjEHQRMiUWFxgQgUFTKRofAjQrHBJDRS0eEJFhclVmJyltXxMzVkkhhDRFST0kVVdP/aAAwDAQACEQMRAD8Au3l7L9kjJIT2i7esd7ZaTS1slkY5PLyNFudj5Zm5Y8nnrr/7F+yX/hB26/8AtO1f/quiRJ+d/wD62/1PXDoojJNNIAQcsaWUAJK/DT5ynaN1x+9tm4737zRBzrH1US4tKta6rcUlakqcRn2aoQshUFaEJr0pQlSUpSkJFgAABiCp2f7Iqqqez/AG74AHGkrV7f/oDrl/2Q9kP/AAf7d/8A2lav/wADqcdfdIVaa06pRV9RaEkmPDTaSD/Z7X/D3x4/0y9U/wDbLV3/ADBm/wD1D9QfaYP/ANkPZH/wf7d//aVq/wDwevv+yHsh/wCD/bv/AO0rV/8AgdTjr7pwTkmmglI+w8qUQEjcps7lQE3V5Y3GJPvPoZ/f6Zeqf+2Wrv8AmDN/+ofqD7TBv+yDsj/4QduxyfGkrT9f/oH/fr7/sg7I/8AhB28/wDtK0f/AKvqc9dwhJAO4cgHwffrz9kaZH/8UyPZLaYH3bC...'},
        ],
        texts: [
            { name: 'রাশিয়ান মেয়ে বিয়ে করবেন এই পুরুষ', content: 'রাশিয়ান মেয়ে বিয়ে করবেন এই পুরুষ' },
            { name: 'শ্যাম্পু অপচয় করায় গৃহহীন হলেন যুবক', content: 'শ্যাম্পু অপচয় করায় গৃহহীন হলেন যুবক' },
            { name: '18+ কথা বলবে বলে 19 বলেছে বান্ধবী', content: '18+ কথা বলবে বলে 19 বলেছে বান্ধবী' },
            { name: 'দ্রুত ওজন কমানোই বিশ্ব রেকর্ড যুবকের', content: 'দ্রুত ওজন কমানোই বিশ্ব রেকর্ড যুবকেরী' },
            { name: 'বাসর রাতে ছোট দেখে নতুন বউ পলাতক', content: 'বাসর রাতে ছোট দেখে নতুন বউ পলাতক' },
            { name: 'ফেলুয়া ছেলে প্লাস পাওয়ায় বিয়ে দিলেন বাবা', content: 'ফেলুয়া ছেলে প্লাস পাওয়ায় বিয়ে দিলেন বাবা' },
            { name: 'মেয়ে দেখতে এসে সাইজ কত শুনলেন পাত্রী', content: 'মেয়ে দেখতে এসে সাইজ কত শুনলেন পাত্রী' },
            { name: 'বউকে দিয়ে কাজ করিয়ে খেতে চান যুবক', content: 'বউকে দিয়ে কাজ করিয়ে খেতে চান যুবক' },
            { name: 'বাসর রাতে বউয়ের লাঠি দেখে ডিভোর্স', content: 'বাসর রাতে বউয়ের লাঠি দেখে ডিভোর্স' }
        ]
    };

    // --- DOM Elements ---
    const toolHub = document.getElementById('toolHub');
    const photoFrameApp = document.getElementById('photoFrameApp');
    const launchBtn = document.getElementById('launchPhotoFrameTool');
    const backBtn = document.getElementById('backToHubBtn');
    const canvas = document.getElementById('photo-canvas');
    const ctx = canvas.getContext('2d');
    
    // Check if essential elements exist before proceeding
    if (!toolHub || !photoFrameApp || !launchBtn || !canvas) {
        console.error("Essential HTML elements are missing. The script cannot run.");
        return;
    }

    // Inputs
    const frameUpload = document.getElementById('frameUpload');
    const photoUpload = document.getElementById('photoUpload');
    const photoUpload2 = document.getElementById('photoUpload2');
    const chooseFrameBtn = document.getElementById('chooseFrameBtn');
    const choosePhotoBtn = document.getElementById('choosePhotoBtn');
    const uploadPhoto2Btn = document.getElementById('uploadPhoto2Btn');
    const choosePhoto2Btn = document.getElementById('choosePhoto2Btn');
    const chooseTextTemplateBtn = document.getElementById('chooseTextTemplateBtn');
    const textInput = document.getElementById('textInput');
    const fontSelect = document.getElementById('fontSelect');
    const textColorPicker = document.getElementById('textColorPicker');
    
    // Toggles
    const textModeToggle = document.getElementById('textModeToggle');
    const dualPhotoToggle = document.getElementById('dualPhotoToggle');
    const dualPhotoControls = document.getElementById('dualPhotoControls');
    
    // Action Buttons
    const downloadBtn = document.getElementById('downloadBtn');
    const undoBtn = document.getElementById('undoBtn');
    const redoBtn = document.getElementById('redoBtn');
    const clearAllBtn = document.getElementById('clearAllBtn');

    // Modal
    const modal = document.getElementById('templateModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalUploadArea = document.getElementById('modal-upload-area');
    const modalGrid = document.getElementById('modalGrid');
    const closeModalBtn = modal.querySelector('.close-btn');
    
    // --- State Management ---
    let frame = null, photo1 = null, photo2 = null;
    let texts = [];
    let isDualMode = false, isTextMode = false;
    let activeObject = null;
    let isDragging = false, isResizing = false;
    let initialPinchDistance = null, initialScale = 1;
    const cornerHandleSize = 20;

    // --- History (Undo/Redo) State ---
    let history = [];
    let redoStack = [];
    
    // --- Initial Setup ---
    updateHistoryButtons();

    // --- View Switching ---
    launchBtn.addEventListener('click', () => {
        toolHub.style.display = 'none';
        photoFrameApp.style.display = 'block';
        saveState(); // Save the initial blank state
    });
    backBtn.addEventListener('click', () => {
        photoFrameApp.style.display = 'none';
        toolHub.style.display = 'block';
    });

    // --- Deep Clone Utility for State Management ---
    function clone(obj) {
        if (!obj) return null;
        if (obj.isPhoto) return { ...obj }; 
        return JSON.parse(JSON.stringify(obj));
    }

    // --- History Management Functions ---
    function saveState() {
        redoStack = []; 
        const currentState = {
            frame, photo1: clone(photo1), photo2: clone(photo2),
            texts: texts.map(t => clone(t)), isDualMode,
        };
        history.push(currentState);
        if (history.length > 30) history.shift();
        updateHistoryButtons();
    }

    function loadState(state) {
        frame = state.frame;
        photo1 = state.photo1;
        photo2 = state.photo2;
        texts = state.texts;
        isDualMode = state.isDualMode;
        dualPhotoToggle.checked = isDualMode;
        dualPhotoControls.style.display = isDualMode ? 'block' : 'none';
        activeObject = null;
        textInput.value = '';
        redrawCanvas();
    }

    function undo() {
        if (history.length <= 1) return;
        redoStack.push(history.pop());
        loadState(history[history.length - 1]);
        updateHistoryButtons();
    }

    function redo() {
        if (redoStack.length === 0) return;
        const nextState = redoStack.pop();
        history.push(nextState);
        loadState(nextState);
        updateHistoryButtons();
    }

    function updateHistoryButtons() {
        undoBtn.disabled = history.length <= 1;
        redoBtn.disabled = redoStack.length === 0;
    }

    // --- Object Creation ---
    const createInteractiveImage = (src, isSecond = false) => {
        const img = new Image(); img.crossOrigin = "Anonymous";
        img.onload = () => {
            const newImage = {
                img, x: canvas.width / 2,
                y: canvas.height / 2, scale: 1, isPhoto: true,
            };
            const scaleToFit = Math.min(canvas.width / img.width, canvas.height / img.height);
            newImage.scale = scaleToFit > 1 ? 1 : scaleToFit;

            if (isDualMode) {
               newImage.scale *= 0.5;
               newImage.x = canvas.width / 4 + (isSecond ? canvas.width / 2 : 0);
            }
            if (isSecond) { photo2 = newImage; } else { photo1 = newImage; }
            activeObject = newImage; saveState(); redrawCanvas();
        };
        img.src = src;
    };

    const createText = (content) => {
        const newText = {
            content, x: canvas.width / 2, y: canvas.height / 2, scale: 1, size: 50,
            font: fontSelect.value, color: textColorPicker.value, isText: true,
        };
        texts.push(newText); activeObject = newText;
        textInput.value = content; saveState(); redrawCanvas();
    };
    
    // --- Main Drawing & UI Functions ---
    function drawOnCanvas(targetCtx, scaleFactor = 1) {
         const { width, height } = targetCtx.canvas;
         targetCtx.clearRect(0, 0, width, height);
         targetCtx.fillStyle = '#1a1a2a'; targetCtx.fillRect(0, 0, width, height);
        if (photo1) { targetCtx.save(); if (isDualMode) { targetCtx.rect(0, 0, width / 2, height); targetCtx.clip(); } drawImage(photo1, targetCtx, scaleFactor); targetCtx.restore(); }
        if (photo2 && isDualMode) { targetCtx.save(); if (isDualMode) { targetCtx.rect(width / 2, 0, width / 2, height); targetCtx.clip(); } drawImage(photo2, targetCtx, scaleFactor); targetCtx.restore(); }
        if (frame) targetCtx.drawImage(frame, 0, 0, frame.naturalWidth * scaleFactor, frame.naturalHeight * scaleFactor);
        texts.forEach(text => drawText(text, targetCtx, scaleFactor));
        if (scaleFactor === 1 && activeObject) drawSelectionBox(activeObject, targetCtx);
    }
    
    function redrawCanvas() { drawOnCanvas(ctx, 1); }
    function drawImage(obj, targetCtx, s) { const w = obj.img.width * obj.scale * s; const h = obj.img.height * obj.scale * s; targetCtx.drawImage(obj.img, (obj.x * s) - w / 2, (obj.y * s) - h / 2, w, h); }
    function drawText(obj, targetCtx, s) {
        targetCtx.fillStyle = obj.color;
        targetCtx.font = `bold ${obj.size * obj.scale * s}px "${obj.font}"`;
        targetCtx.textAlign = 'center';
        targetCtx.textBaseline = 'middle';

        const lines = obj.content.split('\n');
        const lineHeight = obj.size * 1.2 * obj.scale * s;
        const startY = obj.y * s - ((lines.length - 1) * lineHeight) / 2;

        lines.forEach((line, index) => {
            targetCtx.fillText(line, obj.x * s, startY + (index * lineHeight));
        });
    }
    
    function drawSelectionBox(obj, targetCtx) {
        targetCtx.strokeStyle = 'var(--neon-pink)'; targetCtx.lineWidth = 2; targetCtx.setLineDash([6, 6]);
        const bounds = getObjectBounds(obj);
        targetCtx.strokeRect(bounds.x, bounds.y, bounds.width, bounds.height);
        targetCtx.setLineDash([]);
        targetCtx.fillStyle = 'var(--neon-pink)';
        targetCtx.fillRect(bounds.x + bounds.width - cornerHandleSize/2, bounds.y + bounds.height - cornerHandleSize/2, cornerHandleSize, cornerHandleSize);
        targetCtx.fillStyle = 'var(--danger-color)';
        targetCtx.beginPath(); targetCtx.arc(bounds.x, bounds.y, cornerHandleSize / 2, 0, 2 * Math.PI); targetCtx.fill();
        targetCtx.strokeStyle = 'white'; targetCtx.lineWidth = 2; targetCtx.strokeText("X", bounds.x - 4, bounds.y + 5);
    }
    
    // --- Event Handlers for Controls ---
    frameUpload.addEventListener('change', (e) => { const file = e.target.files[0]; if (file) { frame = new Image(); frame.onload = () => { canvas.width = frame.naturalWidth; canvas.height = frame.naturalHeight; saveState(); redrawCanvas(); }; frame.src = URL.createObjectURL(file); } e.target.value = null; });
    photoUpload.addEventListener('change', (e) => handleFileUpload(e, false));
    photoUpload2.addEventListener('change', (e) => handleFileUpload(e, true));
    const handleFileUpload = (e, isSecond) => { const file = e.target.files[0]; if (!file) return; createInteractiveImage(URL.createObjectURL(file), isSecond); e.target.value = null; };

    textInput.addEventListener('focus', () => { if (!activeObject || !activeObject.isText) createText(""); });
    textInput.addEventListener('input', (e) => { if (activeObject && activeObject.isText) { activeObject.content = e.target.value; redrawCanvas(); } else { createText(e.target.value); } });
    textInput.addEventListener('blur', saveState);

    fontSelect.addEventListener('change', () => { if(activeObject && activeObject.isText) { activeObject.font = fontSelect.value; saveState(); redrawCanvas(); } });
    textColorPicker.addEventListener('input', () => { if(activeObject && activeObject.isText) { activeObject.color = textColorPicker.value; redrawCanvas(); } });
    textColorPicker.addEventListener('change', saveState);
    
    dualPhotoToggle.addEventListener('change', (e) => { isDualMode = e.target.checked; dualPhotoControls.style.display = isDualMode ? 'block' : 'none'; if (!isDualMode) photo2 = null; saveState(); redrawCanvas(); });
    textModeToggle.addEventListener('change', (e) => { isTextMode = e.target.checked; activeObject = null; redrawCanvas(); });
    
    undoBtn.addEventListener('click', undo); redoBtn.addEventListener('click', redo);
    clearAllBtn.addEventListener('click', () => { if (confirm("Are you sure you want to clear the entire canvas? This cannot be undone.")) { loadState({ frame: null, photo1: null, photo2: null, texts: [], isDualMode: false }); saveState(); } });
    downloadBtn.addEventListener('click', () => {
        activeObject = null; redrawCanvas(); const offscreenCanvas = document.createElement('canvas'); const offscreenCtx = offscreenCanvas.getContext('2d');
        const highResWidth = frame ? frame.naturalWidth : 1200; const highResHeight = frame ? frame.naturalHeight : 1500;
        offscreenCanvas.width = highResWidth; offscreenCanvas.height = highResHeight; const scaleFactor = highResWidth / canvas.width;
        drawOnCanvas(offscreenCtx, scaleFactor); const link = document.createElement('a'); link.download = 'multi-tool-hub-creation.png'; link.href = offscreenCanvas.toDataURL('image/png'); link.click();
    });

    // --- Template Modal Logic ---
    const openModal = (type) => {
        modal.style.display = 'block';
        modalUploadArea.innerHTML = '';
        modalGrid.innerHTML = '';
        let items, handler, title, uploadHandler;

        if (type === 'frame') { [title, items, handler, uploadHandler] = ['Frame', templates.frames, (url) => { frame = new Image(); frame.crossOrigin = "Anonymous"; frame.onload = () => { canvas.width = frame.naturalWidth; canvas.height = frame.naturalHeight; saveState(); redrawCanvas(); }; frame.src = url; }, () => frameUpload.click()]; }
        else if (type === 'photo1') { [title, items, handler, uploadHandler] = ['Photo 1', templates.photos1, (url) => createInteractiveImage(url, false), () => photoUpload.click()]; }
        else if (type === 'photo2') { [title, items, handler] = ['Photo 2', templates.photos2, (url) => createInteractiveImage(url, true)]; }
        else if (type === 'text') { [title, items, handler] = ['Text', templates.texts, (content) => createText(content)]; }

        modalTitle.textContent = `Select ${title}`;
        
        if (uploadHandler) {
            const uploadBtn = document.createElement('button');
            uploadBtn.textContent = 'Upload File';
            uploadBtn.className = 'btn btn-secondary';
            uploadBtn.onclick = () => { uploadHandler(); modal.style.display = 'none'; };
            modalUploadArea.appendChild(uploadBtn);
        }
        
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'template-item';
            if (type === 'text') {
                div.className += ' text-template-item';
                div.textContent = item.content;
                div.onclick = () => { handler(item.content); modal.style.display = 'none'; };
            } else {
                div.innerHTML = `<img src="${item.url}" alt="${item.name}">`;
                div.onclick = () => { handler(item.url); modal.style.display = 'none'; };
            }
            modalGrid.appendChild(div);
        });
    };
    chooseFrameBtn.addEventListener('click', () => openModal('frame'));
    choosePhotoBtn.addEventListener('click', () => openModal('photo1'));
    uploadPhoto2Btn.addEventListener('click', () => photoUpload2.click());
    choosePhoto2Btn.addEventListener('click', () => openModal('photo2'));
    chooseTextTemplateBtn.addEventListener('click', () => openModal('text'));
    closeModalBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };

    // --- Canvas Interaction Logic ---
    let startX, startY;
    function getMousePos(e) { const rect = canvas.getBoundingClientRect(); const scaleX = canvas.width / rect.width; const scaleY = canvas.height / rect.height; const touch = e.changedTouches ? e.changedTouches[0] : e; return { x: (touch.clientX - rect.left) * scaleX, y: (touch.clientY - rect.top) * scaleY }; }
    function getPinchDistance(e) { const dx = e.touches[0].clientX - e.touches[1].clientX; const dy = e.touches[0].clientY - e.touches[1].clientY; return Math.sqrt(dx * dx + dy * dy); }
    function getObjectBounds(obj) {
        if (!obj) return { x: 0, y: 0, width: 0, height: 0 };
        if (obj.isPhoto) {
            const w = obj.img.width * obj.scale;
            const h = obj.img.height * obj.scale;
            return { x: obj.x - w / 2, y: obj.y - h / 2, width: w, height: h };
        }
        if (obj.isText) {
            ctx.font = `bold ${obj.size * obj.scale}px "${obj.font}"`;
            const lines = obj.content.split('\n');
            const lineHeight = obj.size * 1.2 * obj.scale;
            let maxWidth = 0;
            lines.forEach(line => {
                const metrics = ctx.measureText(line);
                if (metrics.width > maxWidth) {
                    maxWidth = metrics.width;
                }
            });
            const w = maxWidth;
            const h = lines.length * lineHeight;
            return { x: obj.x - w / 2, y: obj.y - h / 2, width: w, height: h };
        }
        return { x: 0, y: 0, width: 0, height: 0 };
    }
    
    function handleStart(e) {
        e.preventDefault();
        if (e.touches && e.touches.length === 2) { handlePinchStart(e); return; }
        const pos = getMousePos(e);
        if (activeObject) {
            const bounds = getObjectBounds(activeObject);
            const removeHandleDist = Math.hypot(pos.x - bounds.x, pos.y - bounds.y);
            if (removeHandleDist <= cornerHandleSize / 2) {
                if (activeObject === photo1) photo1 = null; else if (activeObject === photo2) photo2 = null; else if (activeObject.isText) texts = texts.filter(t => t !== activeObject);
                activeObject = null; saveState(); redrawCanvas(); return;
            }
            const resizeHandleX = bounds.x + bounds.width; const resizeHandleY = bounds.y + bounds.height;
            if (pos.x > resizeHandleX - cornerHandleSize && pos.y > resizeHandleY - cornerHandleSize) { isResizing = true; isDragging = false; canvas.style.cursor = 'nwse-resize'; startX = pos.x; startY = pos.y; return; }
        }
        let foundObject = null; let potentialObjects = (isTextMode) ? [...texts] : [photo1, photo2, ...texts];
        potentialObjects = potentialObjects.filter(Boolean).reverse();
        for(const obj of potentialObjects) { const bounds = getObjectBounds(obj); if (pos.x > bounds.x && pos.x < bounds.x + bounds.width && pos.y > bounds.y && pos.y < bounds.y + bounds.height) { foundObject = obj; break; } }
        activeObject = foundObject;
        if (activeObject) { isDragging = true; isResizing = false; canvas.style.cursor = 'grabbing'; startX = pos.x - activeObject.x; startY = pos.y - activeObject.y; if (activeObject.isText) { textInput.value = activeObject.content; fontSelect.value = activeObject.font; textColorPicker.value = activeObject.color; } } else { textInput.value = ''; }
        redrawCanvas();
    }
    function handlePinchStart(e) {
        let foundObject = null; let potentialObjects = (isTextMode) ? [...texts] : [photo1, photo2, ...texts]; potentialObjects = potentialObjects.filter(Boolean).reverse(); const pos = getMousePos(e.touches[0]);
        for(const obj of potentialObjects) { const bounds = getObjectBounds(obj); if (pos.x > bounds.x && pos.x < bounds.x + bounds.width && pos.y > bounds.y && pos.y < bounds.y + bounds.height) { foundObject = obj; break; } }
        if (!foundObject) return;
        activeObject = foundObject; isDragging = false; isResizing = true; initialPinchDistance = getPinchDistance(e); initialScale = activeObject.scale;
    }
    function handleMove(e) {
        if (!isDragging && !isResizing) return;
        e.preventDefault(); if (e.touches && e.touches.length === 2 && activeObject) { handlePinchMove(e); return; }
        const pos = getMousePos(e); if (isResizing && activeObject) { const dx = pos.x - startX; const dy = pos.y - startY; const newScale = activeObject.scale + (dx + dy) / 200; activeObject.scale = Math.max(0.1, newScale); startX = pos.x; startY = pos.y; } else if (isDragging && activeObject) { activeObject.x = pos.x - startX; activeObject.y = pos.y - startY; }
        redrawCanvas();
    }
    function handlePinchMove(e) { const newDist = getPinchDistance(e); const scale = (newDist / initialPinchDistance) * initialScale; activeObject.scale = Math.max(0.1, scale); redrawCanvas(); }
    function handleEnd(e) { if(isDragging || isResizing) saveState(); isDragging = false; isResizing = false; initialPinchDistance = null; canvas.style.cursor = activeObject ? 'grab' : 'default'; }

    canvas.addEventListener('mousedown', handleStart);
    canvas.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    canvas.addEventListener('touchstart', handleStart, { passive: false });
    canvas.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('touchend', handleEnd);
}

// Defer script execution until the DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
