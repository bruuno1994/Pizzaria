-- CreateTable
CREATE TABLE "pedido" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "preco" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pizza" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "preco" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pizza_pkey" PRIMARY KEY ("id")
);
