---
date: 2022-03-28 00:00:00 +01
title: Smart Contracts Overview
description: An overview of the Valorem protocol smart contracts.
---

Valorem V1 is a binary smart contract system comprised of many libraries, 
which together make the Core. The Core contracts provide the option settlement 
engine upon which more complex systems can be built.

[Core Contracts Source Code](https://github.com/Alcibiades-Capital/valorem-options-contracts)

The Core is designed to be gas efficient, minimal, and provide a secure settlement 
system. The Core consists, primarily, of a settlement engine which allows users 
to write options, exercise options, redeem claims for assets, and settles assignments
of exercises to claims written.

## Core Interface

The core exposes an interface for users of the protocol, which is documented in the 
codebase, additional documentation is provided here.

### IOptionSettlementEngine

`IOptionSettlementEngine` is an 
[ERC-1155 multi-token](https://eips.ethereum.org/EIPS/eip-1155) 
interface extended to provide an interface to the Valorem protocol options 
settlement system.

#### Enums

##### Type

The `Type` enum contains information about the type of a given token in the 
settlement engine.

```solidity
enum Type {
        None,
        Option,
        Claim
    }
```

#### Functions

##### feeBps

Returns the protocol fee in basis points charged to writers in the underlying 
asset and exercisers in the exercise asset.

```solidity
function feeBps() external view returns (uint8);
```

#### Errors

##### TokenNotFound

The `TokenNotFound()` error occurs when a token is not found in the engine.

```solidity
error TokenNotFound();
```

#### Events

##### FeeSwept

The `FeeSwept` event is emitted when accrued protocol fees for a given token are 
swept to the `feeTo` address.

```solidity
event FeeSwept(
        address indexed token,
        address indexed feeTo,
        uint256 amount
    );
```

#### Structs

##### Claim

The `Claim` struct contains information about a claim, generated when a writer calls
`write`. Every claim is linked to an `option` token.

```solidity
struct Claim {
        uint256 option;
        uint112 amountWritten;
        uint112 amountExercised;
        bool claimed;
    }
```

##### Option

The `Option` struct contains all data about an option chain/token and is keyed on the 
unique hash `keccak256(abi.encode(Option memory))` where `settlementSeed` is set to 
`0` at the time of hashing.

```solidity
    struct Option {
        address underlyingAsset;
        uint40 exerciseTimestamp;
        uint40 expiryTimestamp;
        address exerciseAsset;
        uint96 underlyingAmount;
        uint160 settlementSeed;
        uint96 exerciseAmount;
    }
```

##### Underlying

The `Underlying` struct contains information about the underlying assets for 1 
wei of a given token ID in the settlement engine.

```solidity
struct Underlying {
        address underlyingAsset;
        int256 underlyingPosition;
        address exerciseAsset;
        int256 exercisePosition;
    }
```




