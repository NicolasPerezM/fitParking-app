import bcrypt from 'bcrypt';

async function verifyPassword() {
    const password = 'admin123';
    const hash = '$2b$10$Cli7i4enYSo3mM08JZH/1esDHIjd431V7zerW3GMNf3kwId.uiAN.';
    const isMatch = await bcrypt.compare(password, hash);
    console.log(isMatch);
}

verifyPassword();